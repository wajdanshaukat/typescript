import React, {useState} from 'react'
import { useTodos } from '../provider/Todo';

const AddTodoApp = () => {
  const [todo, setTodo] = useState<string>('');
  const {handleAddTodo} = useTodos();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodoApp
