// Here is an example of a typical component:
var HelloWorld = React.createClass({
  render: function(){
    return (
      <div>Hello {this.props.name}</div>
    )
  }
});
ReactDOM.render(<HelloWorld name='Ben' />, document.getElementById('app'))

/*
The component above just has a render method, which means that we can remove the createClass abstraction and just use a plain function.
Refactored to use a stateless functional component, the example above would look like this:
*/
function HelloWorld(props) {
  return (
    <div>Hello {props.name}</div>
  )
}
ReactDOM.render(<HelloWorld name='Ben' />, document.getElementById('app'))

/*
Stateless Functional Components are a great idea to get used to because you can separate your components into container components and presentational components.
*/
