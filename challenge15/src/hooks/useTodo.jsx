import { useState, useEffect } from "react";

export const useTodo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (description) => {
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
  };

  const countTodos = () => {
    return todos.length;
  };

  const countPendingTodos = () => {
    return todos.filter((todo) => !todo.done).length;
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    countTodos,
    countPendingTodos,
  };
};