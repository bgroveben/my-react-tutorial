import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
        <h2>{this.props.params.repoName}</h2>
      </div>
    )
  }
});
/*
The parameter name in the route path becomes the property name in the component.
Both repoName and userName are available on this.props.params in the component.
It is a good idea to add some prop types to help others (and yourself) out later.
https://facebook.github.io/react/docs/reusable-components.html#prop-validation
*/
