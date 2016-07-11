/*
This file is copied from a GitHub Gist by Willson Mock that can be found here:
https://gist.github.com/fay-jai/fc8a5093c0b5124d4b2d
*/

// The following imports are unnecessary for now -- I have links to a CDN on the index.html page
// import React from "react";
// import { render } from "react-dom";

const ParentComponent = React .createClass({
  getDefaultProps: function() {
    console.log("ParentComponent - getDefaultProps");
  },
  getInitialState: function() {
    console.log("ParentComponent - getInitialState");
    return { text: "" };
  },
  componentWillMount: function() {
    console.log("ParentComponent - componentWillMount");
  },
  render: function() {
    console.log("ParentComponent - render");
    return (
      <div className="container">
        <input
          value={this.state.text}
          onChange={this.onInputChange}
        />
      <ChildComponent text={this.state.text} />
      </div>
    );
  }
});

ReactDOM.render(
  <ParentComponent />,
  document.getElementById("textbox")
);
