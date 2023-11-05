import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";
import { useTodo } from "../hooks/useTodo";

export const TodoApp = () => {
    const {
        todos,
        addTodo,
        deleteTodo,
        toggleTodo,
        countTodos,
        countPendingTodos,
    } = useTodo();
    
    return (
        <>
          <h1>TodoApp</h1>
          <hr />
          <div>
            <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
            <TodoForm addTodo={addTodo} />
            <p>Total todos: {countTodos()}</p>
            <p>Pending todos: {countPendingTodos()}</p>
          </div>
        </>
      );
};