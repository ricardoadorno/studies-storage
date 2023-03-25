import { useRef } from "react";
import { useDispatch } from "react-redux";
import { toDoActions } from "../store/store";

function HeaderContainer() {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const addTask = (title: string) => {
    dispatch(toDoActions.addTask(title));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTask(inputRef.current!.value);
        inputRef.current!.value = "";
      }}
      className="container"
    >
      <h2>Header</h2>
      <input ref={inputRef} type="text" placeholder="Add new Task..." />
      <button type="submit">New</button>
    </form>
  );
}

export default HeaderContainer;
