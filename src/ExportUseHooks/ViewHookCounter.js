import { useCounter } from '../Hooks/useCounter/useCounter'

export const ViewHookCounter = () => {

  const {counter, decrement, increment, reset, } = useCounter(0)

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
