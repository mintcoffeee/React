import React, { useReducer, useState } from "react";

const initialState = "black";

// color -> state, dispatch -> action 으로 들어간다
const reducer = (state, action) => {
  switch (action.type) {
    case "RED":
      return "red";
    case "GREEN":
      return "green";
    case "BLUE":
      return "blue";
    case "PINK":
      return "pink";
    case "RESET":
      return initialState;
    default:
      return state;
  } //switch
};

const Test02 = () => {
  const [color, dispatch] = useReducer(reducer, initialState);

  /* 
  = const [color, setColor] = useState('black')
  const onRed = () => {
    setColor('red')
  }
  */

  return (
    <div>
      <h1 style={{ color: color }}>color : {color}</h1>
      <p>
        <button onClick={() => dispatch({ type: "RED" })}>빨강</button>
        <button onClick={() => dispatch({ type: "GREEN" })}>초록</button>
        <button onClick={() => dispatch({ type: "BLUE" })}>파랑</button>
        <button onClick={() => dispatch({ type: "PINK" })}>분홍</button>
        <button onClick={() => dispatch({ type: "RESET" })}>초기화</button>
      </p>
    </div>
  );
};

export default Test02;
