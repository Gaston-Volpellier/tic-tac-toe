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
  const status = "Next player: X";

  const [squares, setSquares] = useState({
    values : Array(9).fill(null)
  })

  const handleClicked = (i) => {
    let squaresState = [...squares.values]
    squaresState[i] = 'X'
    setSquares({ values: squaresState })
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square values={squares.values[0]} clicked={ ()=> handleClicked(0) }/>
        <Square values={squares.values[1]} clicked={ ()=> handleClicked(1) }/>
        <Square values={squares.values[2]} clicked={ ()=> handleClicked(2) }/>
      </div>
      <div className="board-row">
        <Square values={squares.values[3]} clicked={ ()=> handleClicked(3) }/>
        <Square values={squares.values[4]} clicked={ ()=> handleClicked(4) } />
        <Square values={squares.values[5]} clicked={ ()=> handleClicked(5) }/>
      </div>
      <div className="board-row">
        <Square values={squares.values[6]} clicked={ ()=> handleClicked(6) }/>
        <Square values={squares.values[7]} clicked={ ()=> handleClicked(7) }/>
        <Square values={squares.values[8]} clicked={ ()=> handleClicked(8) }/>
      </div>
    </div>
  );
}

function Game(props) {
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


ReactDOM.render(<Game />, document.getElementById("root"));
