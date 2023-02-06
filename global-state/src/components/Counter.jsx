import { useState, useReducer } from "react";
import reducer from "../store/reducer";
const initialState = { count: 0 };
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="wrapper">
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
}
export default Counter;
