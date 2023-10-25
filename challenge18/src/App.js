import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './store/counterSlice';

export const App = () => {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [incrementValue, setIncrementValue] = useState(0);

  const handleIncrementBy = () => {
    if (incrementValue !== 0) {
      dispatch(incrementByAmount(Number(incrementValue)));
    }
  };

  return (
    <div>
      <h1>App</h1>
      <hr />
      <span>Counter is: {counter}</span>
      <button className='btn btn-primary' onClick={() => dispatch(increment())}>
        +1
      </button>
      <button className='btn btn-primary' onClick={() => dispatch(decrement())}>
        -1
      </button>
      <div>
        <input
          type="number"
          value={incrementValue}
          onChange={(e) => setIncrementValue(e.target.value)}
        />
        <button className='btn btn-primary' onClick={handleIncrementBy}>
          Increment by Value
        </button>
      </div>
    </div>
  );
};

export default App;

