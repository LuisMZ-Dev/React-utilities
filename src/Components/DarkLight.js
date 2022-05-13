import { useRef, useState } from "react"


export const DarkLight = () => {

const refDark = useRef();
const [state, setstate] = useState(false)

  const btnchange = () => {    
    refDark.current.classList.toggle('dark')
    setstate(!state)   
    } 
   
return ( 

   
        <div ref={refDark} className="CapInput">
        <button 
        className=' mui-btn mui-btn--small mui-btn--primary' 
        onClick={btnchange} >{state === false ? 'dark':'ligth'} </button>
        <hr/>
        <p>Hello World</p>
        </div>
   
  )
}
