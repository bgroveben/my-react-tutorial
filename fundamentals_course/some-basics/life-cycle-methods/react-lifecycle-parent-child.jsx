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
  },
  componentDidMount: function() {
    console.log("ParentComponent - componentDidMount");
  },
  componentWillUnmount: function() {
    console.log("ParentComponent - componentWillUnmount");
  },
  onInputChange: function(event) {
    this.setState({ text: event.target.value });
  }
});

const ChildComponent = React.createClass({
  getDefaultProps: function() {
    console.log("ChildComponent - getDefaultProps");
  },
  getInitialState: function() {
    console.log("ChildComponent - getInitialState");
    return { dummy: ""};
  },
  componentWillMount: function() {
    console.log("ChildComponent - componentWillMount");
  },
  componentDidMount: function() {
    console.log("ChildComponent - componentDidMount");
  },
  componentWillUnmount: function() {
    console.log("ChildComponent - componentWillUnmount");
  },
  componentWillReceiveProps: function(nextProps) {
    console.log("ChildComponent - componentWillReceiveProps");
    console.log(nextProps);
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    console.log("ChildComponent - shouldComponentUpdate");
    return true;
  },
  componentWillUpdate: function(nextProps, nextState) {
    console.log("ChildComponent - componentWillUpdate");
    console.log("nextProps:");
    console.log(nextProps);
    console.log("nextState:");
    console.log(nextState);
  },
  render: function() {
    console.log("ChildComponent - render");
    return (
      <div>Props: {this.props.text}</div>
    );
  },
  componentDidUpdate: function(previousProps, previousState) {
    console.log("ChildComponent - componentDidUpdate");
    console.log("previousProps:");
    console.log(previousProps);
    console.log("previousState:");
    console.log("previousState");
  }
});

ReactDOM.render(
  <ParentComponent />,
  document.getElementById("textbox")
);
