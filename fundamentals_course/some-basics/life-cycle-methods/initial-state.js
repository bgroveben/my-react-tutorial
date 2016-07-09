// Set some initial state in our component when it is first added to the DOM using getInitialState:
var Login = React.createClass({
  getInitialState: function () {
    return {
      email: '',
      password: ''
    }
  },
  render: function () {
    {/* ... */}
  }
});
/*
Above we have used getInitialState to set an email and password property on our state object in our Login component.
To update the state, you can call this.setState passing in a new object which overwrites one or both of the email and password properties.
*/
