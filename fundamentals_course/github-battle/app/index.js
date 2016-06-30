var USER_DATA = {
  name: 'Benjamin Grove',
  username: 'bgroveben',
  image: 'https://avatars0.githubusercontent.com/u/2719094?v=3&s=460'
}

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
  render: function(){
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
  }
});

var ProfileLink = React.createClass({
  render: function(){
    return (
      <div>
        <a href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </a>
      </div>
    )
  }
})

ReactDOM.render(
  <HelloWorld name="bgroveben" />,
  document.getElementById('app')
);
