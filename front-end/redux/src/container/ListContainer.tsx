import List from "./components/List";
import { useSelector } from "react-redux";

function ListContainer() {
  const toDoList = useSelector((state: any) => state.toDoList);

  return (
    <div>
      <h4>Todo List</h4>
      {toDoList.map((toDo: any) => (
        <List
          key={toDo.id}
          id={toDo.id}
          title={toDo.title}
          completed={toDo.completed}
        />
      ))}
    </div>
  );
}

export default ListContainer;
