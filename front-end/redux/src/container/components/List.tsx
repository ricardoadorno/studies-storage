import { useDispatch } from "react-redux";
import { toDoActions } from "../../store/store";

export default function List({ id, title, completed }) {
  const dispatch = useDispatch();

  const deleteToDo = (id: string) => {
    dispatch(toDoActions.removeTask(id));
  };

  const toggleToDo = (id: string) => {
    dispatch(toDoActions.toggleTask(id));
  };

  const styles = {
    listGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 4fr 1fr",
      gridTemplateRows: "1fr",
      gridTemplateAreas: `"checkbox text trash"`,
      alignItems: "center",
      justifyItems: "center",
      padding: "1rem",
      borderBottom: "1px solid #ccc",
    },
    checkbox: {
      gridArea: "checkbox",
      justifySelf: "center",
    },
    text: {
      gridArea: "text",
      margin: "0",
    },
    trash: {
      gridArea: "trash",
      justifySelf: "center",
      cursor: "pointer",
      color: "red",
    },
  };

  return (
    <div className="grid" style={styles.listGrid}>
      <input
        onClick={() => toggleToDo(id)}
        type="checkbox"
        style={styles.checkbox}
        checked={completed}
      />
      <p style={styles.text}>{title}</p>
      <i
        onClick={() => deleteToDo(id)}
        style={styles.trash}
        className="fas fa-trash-alt"
      ></i>
    </div>
  );
}
