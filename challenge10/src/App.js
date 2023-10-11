import './App.css';
import useCounter from './hooks/useCounter';

function App() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div className='App'>
      <p>Counter: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
