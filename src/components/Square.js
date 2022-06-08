import React from "react";

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

export default Square;