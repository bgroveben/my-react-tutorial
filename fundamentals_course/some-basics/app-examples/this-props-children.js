// this.props.children is an array of components rather than a single component.
// This allows for the use of and nesting of multiple components.

// A paragraph element
<p>What even is a jQuery?</p>

// A React component
<Clock>
  12:49 AM
</Clock>

// A more complex React component
<Clock>
  <Time />
  <Period />
</Clock>
