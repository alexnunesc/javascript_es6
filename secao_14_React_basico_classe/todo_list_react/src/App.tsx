import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const countPlus = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const countLess = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className='bg-gray-100 w-screen h-screen flex items-center justify-center flex-col gap-3'>
      <button onClick={() => countPlus()}>Count +</button>
      <button onClick={() => countLess()}>Count -</button>
      <p>{count}</p>
    </div>
  )
}

export default App;
