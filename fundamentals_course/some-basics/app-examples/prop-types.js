// Since JavaScript is not a strictly typed language, PropTypes in React are the middle ground in terms of type checking properties that are passed to your components.

<Icon
  name='fontawesome|facebook-square'
  size={70}
  color='3b5998'
  style={styles.facebook} />

  // Above is the implementation of an icon component used with React native.
  // Below is how we can use PropTypes to check the paramenters and ensure that they are valid.

  var React = require('react')
  var PropTypes = React.PropTypes
  var Icon = React.createClass({
    propTypes: {
      name: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      style: PropTypes.object
    },
    render: function() {
      /* ... */
    }
  });

// You can find out more about PropTypes here:
// https://facebook.github.io/react/docs/reusable-components.html#prop-validation

// PropTypes are a great way to find bugs in your components as well as to add documentation to a component.
