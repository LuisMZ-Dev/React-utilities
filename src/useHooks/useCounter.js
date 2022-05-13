import { useState } from "react";

export const useCounter = () => {

    const [counter, setCounter] = useState(0); 
    const reset = () => setCounter(0);
    const increment = () => setCounter( counter + 1 );    
    const decrement = () => counter > 0 && setCounter( counter -1 )

  return {counter, reset, increment, decrement}
}
