// import { useSelector, useDispatch } from "react-redux";
import HeaderContainer from "./container/HeaderContainer";
import ListContainer from "./container/ListContainer";

export default function App() {
  return (
    <div className="container">
      <HeaderContainer />
      <ListContainer />
    </div>
  );
}

// Counter
// import { useSelector, useDispatch } from "react-redux";
// import { counterActions } from "./store/store";

// export default function Counter() {
//   const counter = useSelector((state: any) => state.counter);
//   const showCounter = useSelector((state: any) => state.showCounter);
//   const dispatch = useDispatch();

//   const increment = () => {
//     dispatch(counterActions.increment());
//   };

//   const decrement = () => {
//     dispatch(counterActions.decrement());
//   };

//   const addBy = (amount: number) => {
//     dispatch(counterActions.addBy(amount));
//   };

//   const toggleCounter = () => {
//     dispatch(counterActions.toggleCounter());
//   };

//   return (
//     <div className="container">
//       {" "}
//       <h1>Counter</h1>
//       {showCounter && <h2>{counter}</h2>}
//       <button onClick={decrement}>-</button>
//       <button onClick={increment}>+</button>
//       <button onClick={() => addBy(5)}>+5</button>
//       <button onClick={toggleCounter}>Toggle Counter</button>
//     </div>
//   );
// }
