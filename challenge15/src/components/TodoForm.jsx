import { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [nuevoTodo, setNuevoTodo] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo(nuevoTodo);
    setNuevoTodo('');
  };

  return (
    <div>
      <h4>Agregar TODO</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input value={nuevoTodo} onChange={(evt) => setNuevoTodo(evt.target.value)} />
        <button>Agregar</button>
      </form>
    </div>
  );
};