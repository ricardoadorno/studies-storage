import { configureStore, createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
  name: "toDo",
  initialState: {
    toDoList: [
      { id: "t1", title: "Finish the course", completed: false },
      { id: "t2", title: "Finish the course2", completed: true },
    ],
  },
  reducers: {
    addTask(state, action) {
      state.toDoList.push({
        id: Math.random().toString(),
        title: action.payload,
        completed: false,
      });
    },
    removeTask(state, action) {
      state.toDoList = state.toDoList.filter(
        (task) => task.id !== action.payload
      );
    },
    toggleTask(state, action) {
      const task = state.toDoList.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const toDoActions = toDoSlice.actions;
const store = configureStore({
  reducer: toDoSlice.reducer,
});
export default store;

// Tutorial Redux Toolkit
// const counterSlice = createSlice({
//   name: "counter",
//   initialState: { counter: 0, showCounter: true },
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     addBy(state, action) {
//       state.counter += action.payload;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });
// export const counterActions = counterSlice.actions;
// const store = configureStore({
//   reducer: counterSlice.reducer,
// });
// export default store;

// Wihout Redux Toolkit
// const reducerFn = (state = { counter: 10 }, action) => {
//   if (action.type === "INCREMENT") {
//     return {
//       counter: state.counter + 1,
//     };
//   }
//   if (action.type === "DECREMENT") {
//     return {
//       counter: state.counter - 1,
//     };
//   }
//   return state;
// };
// const store = createStore(reducerFn);
// export default store;
