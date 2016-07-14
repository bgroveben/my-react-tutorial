var React = require('react');
var ReactCssTransitionGroup = require('react-addons-css-transition-group');

var Main = React.createClass({
  render: function () {
    return (
      <div className='main-container'>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
