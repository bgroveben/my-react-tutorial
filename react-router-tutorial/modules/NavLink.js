/*
Most links don't need to know they are active, usually just the primary navigation links need to know.
It's useful to wrap those primary nav links so you don't have to remember what your activeClassName or
activeStyle is everywhere.
We will use the spread operator (...) to clone activeClassName to the desired component.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
*/

import React from 'react';
import { Link } fro 'react-router';

export default React.createClass({
  render() {
    return <Link {...this.props} activeClassName="active" />
  }
});
