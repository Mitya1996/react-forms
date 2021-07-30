import "./TodoList.css";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const add = (newTodo) => {
    setTodos((oldTodos) => [...oldTodos, newTodo]);
  };
  const deleteTodo = (id) => {
    setTodos((oldTodos) => oldTodos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          deleteTodo={deleteTodo}
        />
      ))}
      <NewTodoForm createTodo={add} />
    </>
  );
}

export default TodoList;
