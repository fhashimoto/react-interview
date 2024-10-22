// src/components/Counter.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/store";

interface RootState {
  counter: {
    count: number;
  };
}

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};

export default Counter;
