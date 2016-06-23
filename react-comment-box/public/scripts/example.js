// CommentBox component, which is just a simple <div>
var CommentBox = React.createClass({
  render: function() {
    return (
      // Native HTML element names start with a lowercase letter
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

// CommentList component that will be used within CommentBox
var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        Hello, World! I am a CommentList.
      </div>
    );
  }
});

// CommentForm component that will be used within CommentBox
var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, World! I am a CommentForm.
      </div>
    );
  }
});

// Using props, we will be able to read the data passed to the Comment from the CommentList
var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

ReactDOM.render(
  // Custom React class names begin with an uppercase letter
  <CommentBox />,
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
