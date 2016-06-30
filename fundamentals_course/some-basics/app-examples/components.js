// The first React component of the tutorial.
// It's here because I don't know where else to put it.

var React = require('react')
var ReactDOM = require('react-dom')
var Helloworld = React.createClass({
  render: function(){
    return (
      <div>
        Hello World!
      </div>
    )
  }
});
ReactDOM.render(<HelloWorld />, document.getElementById('app'));

/*
React code should abide by the acronym FIRST
Focused
Independent
Reusable
Small
Testable
*/
