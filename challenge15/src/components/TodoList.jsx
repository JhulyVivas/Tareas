import styles from '../styles/TodoList.module.css'

export const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
    return (
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span
                className={`${todo.done ? styles.done : ""}`}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.description}
              </span>
              <button onClick={() => deleteTodo(todo.id)}>Borrar</button>
            </li>
          ))}
        </ul>
      </div>
    );
};