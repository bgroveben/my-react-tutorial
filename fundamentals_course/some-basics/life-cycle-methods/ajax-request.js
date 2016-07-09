// Make an Ajax request to fetch some data needed for this component using componentDidMount.
// This will get called right after the component is mounted to the DOM.
var FriendsList = React.createClass({
  componentDidMount: function () {
    return Axios.get(this.props.url).then(this.props.callback)
  },
  render: function () {
    {/* ... */}
  }
});
/*
Axios: https://github.com/mzabriskie/axios
Here we are using Axios to fetch some data, then call a callback we received from props once that data is resolved.
https://github.com/mzabriskie/axios#example -- Performing a GET request (if the above statement sounds confusing)
*/
