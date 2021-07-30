import CloseIcon from "@material-ui/icons/Close";
import "./Todo.css";

function Todo({ id, task, deleteTodo }) {
  return (
    <>
      <div className="Todo">
        {task}
        <CloseIcon onClick={() => deleteTodo(id)} />
      </div>
    </>
  );
}

export default Todo;
