// import { useSelector, useDispatch } from "react-redux";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./vanilla_store/reducers";

export default function Test() {
  const count = useSelector((state: any) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
