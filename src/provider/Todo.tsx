import { createContext, ReactNode, useContext, useState } from "react";

interface TodosProviderProps {
  children: ReactNode;
}

interface Todo {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
}

interface TodosContext {
  todos: Todo[];
  handleAddTodo: (task: string) => void;
  toggleTodoAsCompleted: (id: string) => void;
  handleDeleteTodo : (id: string) => void
}

export const TodosContext = createContext<TodosContext | null>(null);

export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const storedTodos = localStorage.getItem("todos");
      return storedTodos ? JSON.parse(storedTodos) : [];
    } catch (error) {
      return [];
    }
  });

  const handleAddTodo = (task: string) => {
    setTodos((prev) => {
      const newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
    //   console.log("my Previous" + prev);
    //   console.log(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const toggleTodoAsCompleted = (id:string) => {
      setTodos ((prev) => {
        let newTodos = prev.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        });
        localStorage.setItem("todos", JSON.stringify(newTodos));
        return newTodos;
      });
  }

  const handleDeleteTodo = (id:string) => {
    setTodos ((prev) => {
      let newTodos = prev.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  }

  return (
    <TodosContext.Provider value={{ todos, handleAddTodo, toggleTodoAsCompleted, handleDeleteTodo }}>
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = () => {
  const TodosConsumer = useContext(TodosContext);
  if (!TodosConsumer) {
    throw new Error("TodosContext.Provider not found");
  }

  return TodosConsumer;
};
