// Here is a basic example of using props

var HelloUser = React.createClass({
  render: function(){
    return (
      <div> Hello, {this.props.name}</div>
    )
  }
});
ReactDOM.render(<HelloUser name="Ben"/>, document.getElementById('app'));

/*
Here is a more advanced example.
We're going to have two components now -- one parent, one child.
The parent will pass data down to the child as props.
*/
// Here is the parent component
var FriendsContainer = React.createClass({
  render: function(){
    var name = 'Benjamin Grove'
    var friends = ['MacBook Pro', 'Fujitsu LifeBook', 'IPad Air']
    return (
      <div>
        <h3> Name: {name} </h3>
        <ShowList names={friends} />
      </div>
    )
  }
});
// Here is the child component
var ShowList = React.createClass({
  render: function(){
    var listItems = this.props.names.map(function(friend){
      return <li> {friend} </li>;
    });
    return (
      <div>
        <h3> Friends </h3>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});
