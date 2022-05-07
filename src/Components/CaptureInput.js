import React, { useState } from 'react'

export const CaptureInput = () => {
    
    const ini = ''
    const [capture, setcapture] = useState(ini) 
    const [received, setreceived] = useState('') 

    const CaptureValueInput= ({target})=>{setcapture(target.value)} 
    const sendForm = (e) => { e.preventDefault();
      if(capture.trim().length > 1){ setreceived(capture); reset(); }}
      
    const reset = ()=>{
      setcapture(ini)
      const cleanform = document.querySelector('form')
      cleanform.reset()
    }     

  return (
      <div>
        <form  onSubmit={sendForm}>
        <h4>CaptureInput: {received}</h4>
        <input type='text' onChange={CaptureValueInput}/>        
        <button className='mui-btn mui-btn--small mui-btn--primary' type='submit'>enviar</button>
        <p>En tiempo real: {capture}</p>        
        </form>
        <hr/>        
      </div>  
    )
   
}
