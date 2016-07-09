// Set up any listeners (ie Websockets or Firebase listeners) using componentDidMount:
var FriendsList = React.createClass({
  componentDidMount: function () {
    ref.on('value', function(snapshot) {
      this.setState({
        friends:snapshot.val()
      });
    });
  },
  render: function () {
    {/* ... */}
  }
});
/*
Now that we have set up the listener, we want to be sure to remove it when the component is removed from the DOM to prevent memory leaks. See remove-listeners.js.
*/
