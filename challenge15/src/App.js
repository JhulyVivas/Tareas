import React from "react";
import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";
import { useTodo } from "./hooks/useTodo";
import "./App.css";

function App() {
  const {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    countTodos,
    countPendingTodos,
  } = useTodo();

  return (
    <div className="App">
      <h1>TodoApp</h1>
      <div>
        <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        <TodoForm addTodo={addTodo} />
        <p>Total todos: {countTodos()}</p>
        <p>Pending todos: {countPendingTodos()}</p>
      </div>
    </div>
  );
}

export default App;

