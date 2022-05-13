import { useCounter } from "../useHooks/useCounter"

export const Counter = () => {

  const counter1 = useCounter(0)
  const counter2 = useCounter(0)

 

  return (
    <>
        <h4>Counter 1</h4>
        <div>
        <button className='mui-btn mui-btn--small mui-btn--primary'
         onClick={counter1.increment}>+</button>
        <button className='mui-btn mui-btn--small mui-btn--primary'
         onClick={counter1.decrement}>-</button>
        <button className='mui-btn mui-btn--small mui-btn--danger'
         onClick={counter1.reset}>reset</button>        
        </div>
        <h1>{counter1.counter}</h1>

        <h4>Counter 2</h4>
        <div>
        <button className='mui-btn mui-btn--small mui-btn--primary'
         onClick={counter2.increment}>+</button>
        <button className='mui-btn mui-btn--small mui-btn--primary'
         onClick={counter2.decrement}>-</button>
        <button className='mui-btn mui-btn--small mui-btn--danger'
         onClick={counter2.reset}>reset</button>        
        </div>
        <h1>{counter2.counter}</h1>
    </>
  )
}
