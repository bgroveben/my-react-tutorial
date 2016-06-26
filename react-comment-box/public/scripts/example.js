// CommentBox component, which is just a simple <div>
var CommentBox = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  // getInitialState executes exactly once during the lifecycle of the component and sets the initial state
  getInitialState: function() {
    return {data: []};
  },
  // componentDidMount is a method called automatically by React after a component is rendered for the first time
  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      // Native HTML element names start with a lowercase letter
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
});

// CommentList component that will be used within CommentBox
var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

// CommentForm component that will be used within CommentBox
// Controlled Components -- https://facebook.github.io/react/docs/forms.html#controlled-components
// We will be using this.state to save the user's input as it is entered
var CommentForm = React.createClass({
  // Define an initial state with 2 properties 'author' and 'text' and set them to be empty strings
  getInitialState: function() {
    return {author: '', text: ''};
  },
  // Tell onChange event handlers (in the <input> elements) what to do
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  // In the input elements, set the 'value' prop to reflect the state of the component and attach 'onChange' handlers
  // These <input> elements with a value set are your Controlled Components 
  render: function() {
    return (
      <form className="commentForm">
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Type something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

// Using props, we will be able to read the data passed to the Comment from the CommentList
var Comment = React.createClass({
  // Bypass React security and use Remarkable to insert raw HTML
  // Using this feature relies on Remarkable to automatically strip HTML markup and insecure links from the output
  rawMarkup: function() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
  },

  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});

ReactDOM.render(
  // Custom React class names begin with an uppercase letter
  <CommentBox url="/api/comments" pollInterval={2000} />,
  document.getElementById('content')
);
/*
It is important that ReactDOM.render remain at the bottom of the script for this tutorial.
ReactDOM.render should only be called after the composite components have been defined.
*/
/*
Data passed in from a parent component is available as a 'property' on the child component.
These 'properties' are accessed through this.props.
We access named attributes passed to the component as keys on this.props and any nested elements as this.props.children.
*/
/*
Props are immutable; they are passed from the parent and are 'owned' by the parent.
To implement interactions, we introduce mutable state to the component.
this.state is private to the component and can be changed by calling this.setState().
When the state updates, the component re-renders itself.
*/
