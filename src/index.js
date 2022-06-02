import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Square(props) {

  const [toggleClick, setClicked] = useState({
    isClicked : null
  })

  function handleClicked() {
    setClicked({ isClicked: 'X' })
  }

  return (
    <button
      className="square"
      onClick={
        () => { handleClicked() }
      }>
        { toggleClick.isClicked }
    </button>
  );
}


function Board (props) {
  const status = "Next player: X";

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={0} />
        <Square value={1} />
        <Square value={2} />
      </div>
      <div className="board-row">
        <Square value={3} />
        <Square value={4} />
        <Square value={5} />
      </div>
      <div className="board-row">
        <Square value={6} />
        <Square value={7} />
        <Square value={8} />
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
