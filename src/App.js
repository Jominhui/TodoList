import TodoTemplate from "./Components/TodoTemplate";
import TodoList from "./Components/TodoList";
import "./Components/TodoTemplate.scss";

import "./App.css";

function App() {
  return (
    <TodoTemplate>
      <TodoList />
    </TodoTemplate>
  );
}

export default App;
