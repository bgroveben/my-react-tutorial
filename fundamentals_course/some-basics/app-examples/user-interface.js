// Building UIs with pure functions and function composition

var getProfilePic = function(username){
  return 'https://photo.fb.com/' + username
}
var getProfileLink = function(username){
  return 'https://www.fb.com/' + username
}
var getProfileData = function(username){
  return {
    pic: getProfilePic(username),
    link: getProfileLink(username)
  }
}
getProfileData('bgroveben')
/* The code above has three functions and one function invocation.
Now, instead of having those functions return some value, we want them to return some UI.
*/
var ProfilePic = React.createClass({
  render: function(){
    return (
      <img src={'https://photo.fb.com/' + this.props.username} />
    )
  }
});
var ProfileLink = React.createClass({
  render: function(){
    return (
      <a href={'https://www.fb.com/' + this.props.username}>
        {this.props.username}
      </a>
    )
  }
});
var Avatar = React.createClass({
  render: function(){
    return (
      <div>
        <ProfilePic username={this.props.username} />
        <ProfileLink username={this.props.username} />
      </div>
    )
  }
});
<Avatar username="bgroveben" />
/*
Now, instead of composing functions to get some value, we're composing functions to get some UI.
This idea is so important in React that React 0.14 introduced Stateless Functional Components.
Stateless Functional Components allow the code above to be written as normal functions.
*/
var ProfilePic = function(props){
  return <img src={'https://photo.fb.com/' + props.username} />
}
var ProfileLink = function(props){
  return (
    <a href={'https://www.fb.com/' + props.username}>
      {props.username}
    </a>
  )
}
var Avatar = function(props){
  return (
    <div>
      <ProfilePic username={props.username} />
      <ProfileLink username={props.username} />
    </div
  )
}
<Avatar username="bgroveben" />

/*
Pure functions have the following characteristics:
- Pure functions always return the same result given the same arguments.
- A pure function's execution doesn't depend on the state of the application.
- Pure functions don't modify the variables outside of their scope.
To demonstrate, look at the difference between the output of .slice() and .splice() below
*/
var friends = ['Alice', 'Bob', 'Carol']
friends.slice(0, 1) //=> 'Alice'
friends.slice(0, 1) //=> 'Alice'
friends.slice(0, 1) //=> 'Alice'

var friends = ['Alice', 'Bob', 'Carol']
friends.splice(0, 1) //=> 'Alice'
friends.splice(0, 1) //=> 'Bob'
friends.splice(0, 1) //=> 'Carol'
