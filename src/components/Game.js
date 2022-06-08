import React, {useState} from "react";
import Board from "../components/Board";


function Game(props) {

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

export default Game