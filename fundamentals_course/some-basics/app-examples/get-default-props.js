/*
getDefaultProps allows you to specify what the default props will be in a
component if those specific props aren't specified when the component is invoked.
*/

var Loading = React.createClass({
  getDefaultProps: function () {
    return {
      text: 'loading',
      styles: {color: 'red'}
    }
  },
  render: function () {
    {/* ... */}
  }
});

// Now if someone uses the Loading component like so:
<Loading />
// this.props.text will default to 'loading' and
// this.props.styles will default to the color red.

// If someone wanted to specify, they could use this:
<Loading text="One Second" styles={color: 'green'} />
