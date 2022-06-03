import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Square(props) {
  return (
    <button
      className="square"
      onClick={ props.clicked }
    >
      { props.values }
    </button>
  );
}

function Board (props) {

  return (
    <div>
      <div className="status">{props.status}</div>
      <div className="board-row">
        <Square values={props.squares.squares[0]} clicked={ ()=> props.clickHandler(0) }/>
        <Square values={props.squares.squares[1]} clicked={ ()=> props.clickHandler(1) }/>
        <Square values={props.squares.squares[2]} clicked={ ()=> props.clickHandler(2) }/>
      </div>
      <div className="board-row">
        <Square values={props.squares.squares[3]} clicked={ ()=> props.clickHandler(3) }/>
        <Square values={props.squares.squares[4]} clicked={ ()=> props.clickHandler(4) } />
        <Square values={props.squares.squares[5]} clicked={ ()=> props.clickHandler(5) }/>
      </div>
      <div className="board-row">
        <Square values={props.squares.squares[6]} clicked={ ()=> props.clickHandler(6) }/>
        <Square values={props.squares.squares[7]} clicked={ ()=> props.clickHandler(7) }/>
        <Square values={props.squares.squares[8]} clicked={ ()=> props.clickHandler(8) }/>
      </div>
    </div>
  );
}

function Game(props) {
  let status;
  const [positions, setPositions] = useState({
    squares: Array(9).fill(null),
    xIsNext: true
  })

  const winner = calculateWinner(positions.squares);
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (positions.xIsNext ? 'X' : 'O');
  }
  
  const handleClicked = (i) => {
    let positionsState = [...positions.squares]

    if (calculateWinner(positionsState) || positionsState[i]) {
      return;
    }
    positionsState[i] = positions.xIsNext ? 'X' : 'O'
    setPositions({ squares: positionsState, xIsNext: !positions.xIsNext })
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={ positions } clickHandler={ handleClicked } status={ status }></Board>
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


ReactDOM.render(<Game />, document.getElementById("root"));
