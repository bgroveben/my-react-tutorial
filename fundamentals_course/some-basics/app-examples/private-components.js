// Private Components
/*
The code below returns to us a header and an unordered list of friends:
*/
var React = require('react');
function FriendsList (props) {
  return (
    <h1>Friends:</h1>
    <ul>
      {props.friends.map((friend, index) => {
        return (
          <li key={friend}>{friend}</li>
        )
      })}
    </ul>
  )
}
module.exports = FriendsList;

/*
The code above is fine, but remember, React is all about modularity.
As your render method grows, its a good habit to take the pieces and abstract them to new components.
Let's create another stateless functional component that's in charge of handling each friend.
*/

var React = require('react');
function FriendItem (props) {
  return <li>{props.friend}</li>
}
function FriendsList (props) {
  return (
    <h1>Friends:</h1>
    <ul>
      {props.friends.map((friend, index) => <
        FriendItem friend={friend} key={friend} />)}
    </ul>
  )
}
module.exports = FriendsList

// Notice that all we have done is create a private component just as we would a private function.

/*!!
An important note about stateless functional components -- they have no 'this' keyword.
That means that our function cannot be called in a way that we are not expecting.
!!*/
