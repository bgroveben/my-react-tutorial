import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// React supports functional components for types like Square that only consist
// of a render() method
/*
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}
*/

// we can replace the whole Square class with this function:
function Square(props) {
  return (
    // note the absence of parens after props.onClick
    // props.onClick() doesn't work because it would call the function
    // immediately instead of passing it down
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  // add a constructor to the board and set its initial state to contain an
  // array with 9 nulls that correspond to the 9 squares.
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      // 'X' gets the first move by default
      xIsNext: true, // toggle boolean value and save the state on each move
    };
  }

  // Square no longer keeps its own state, so it informs Board (Square's
  // parent) when it's clicked
  handleClick(i) {
    // use .slice() to copy the squares array before making changes and to
    // prevent mutating the existing array
    const squares = this.state.squares.slice();
    // update the handleclick function to flip the value of xIsNext so that X
    // and O take turns
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        // pass a prop value to Square
        value={this.state.squares[i]}
        // pass down a function from Board to Square that gets called when the
        // square is clicked
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    // display who's next -- X or O
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
