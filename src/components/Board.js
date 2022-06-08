import React from "react";
import Square from "../components/Square";

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

export default Board;