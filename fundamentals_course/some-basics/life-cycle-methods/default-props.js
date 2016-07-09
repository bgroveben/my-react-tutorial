// Establish some default props in our component with the getDefaultProps method:
var Loading = react.createClass({
  getDefaultProps: function () {
    return {
      text: 'Loading'
    }
  },
  render: function () {
    {/* ... */}
  }
});
/*
If we had a Loading component that took in a loading 'text', we could make sure that if a 'text' attribute isn't provided to the component, this.props.text will by default be 'Loading'. 
*/
