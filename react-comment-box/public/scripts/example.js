// CommentBox component, which is just a simple <div>
var CommentBox = React.createClass({
  render: function() {
    return (
      // Native HTML element names start with a lowercase letter
      <div className="commentBox">
        Hello, World! I am a CommentBox.
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
It is important that ReactDOM.render remain at the bottom of the script for this tutorial
ReactDOM.render should only be called after the composite components have been defined.
*/
