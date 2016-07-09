// Remove any listeners you initially set up (when they are unmounted) using componentWillUnmount:
var FriendsList = React.createClass({
  componentWillUnmount: function () {
    ref.off()
  },
  render: function () {
    {/* ... */}
  }
});
/*
After we have set up a listener, we need to remove it when the component is removed from the DOM so that there are no memory leaks.
*/
