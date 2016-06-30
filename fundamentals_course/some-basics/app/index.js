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
