import { useState } from 'react';


export const useCounter = (initialState=0) => {    
    
    const [counter, setCounter] = useState(initialState); // Hook de react useState
    const reset = () => setCounter( initialState );
    const increment = () => setCounter( counter + 1 );    
    const decrement = () => {if (counter > 0) setCounter( counter -1 )}

    return { counter, increment, decrement, reset};

}
