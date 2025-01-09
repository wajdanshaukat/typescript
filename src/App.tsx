// import MyButton from './components/Button';
// import Input from './components/Inputs';
// import {CounterProvider} from "./provider/counter"
import "./App.css";
import AddTodos from "./components/AddTodos";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1>Todo via TypeScript</h1>
      <Navbar/>
      <AddTodos />
      <Todos/>
    </>
  );
}

export default App;
