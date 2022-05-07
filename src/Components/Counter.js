import { useState } from "react";

export const Counter = () => {

  const [counter, setCounter] = useState(0); // Hook de react useState
    const reset = () => setCounter(0);
    const increment = () => setCounter( counter + 1 );    
    const decrement = () => {if (counter > 0) setCounter( counter -1 )}


  return (
    <>
        <h4>Counter</h4>
        <hr/>
        <div>
        <button className='mui-btn mui-btn--small mui-btn--primary'
         onClick={increment}>+</button>
        <button className='mui-btn mui-btn--small mui-btn--primary'
         onClick={decrement}>-</button>
        <button className='mui-btn mui-btn--small mui-btn--danger'
         onClick={reset}>reset</button>        
        </div>
        <h2>{counter}</h2>
    </>
  )
}
