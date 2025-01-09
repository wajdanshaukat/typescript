import { useTodos } from "../provider/Todo";
import { useSearchParams } from "react-router-dom";

const Todos = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();
  const [searchParams] = useSearchParams();
  const todosFilter = searchParams.get("todos");

  let filterData = todos;
  if (todosFilter === "active") {
    filterData = todos.filter((todo) => !todo.completed);
  }
  if (todosFilter === "completed") {
    filterData = todos.filter((todo) => todo.completed);
  }

  return (
    <ul className="main-task">
      {filterData.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            id={`todo-${todo.id}`}
            checked={todo.completed}
            onChange={() => {
              toggleTodoAsCompleted(todo.id);
            }}
          />
          <label htmlFor={`todo-${todo.id}`}> {todo.task}</label>
          {todo.completed && (
            <button
              type="button"
              onClick={() => {
                handleDeleteTodo(todo.id);
              }}
            >
              Delete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Todos;
