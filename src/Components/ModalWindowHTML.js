import React, { useState } from 'react'

export const ModalWindowHTML = () => {
  

  const btnaction = () =>{
    const modal = document.getElementById('wmodal')
    modal.classList.toggle('activemodal')
    };

  return (      
      <div className='father_modal'> 
      <p>Ventana Modal HTML</p>     
      <button 
      onClick={btnaction}  
      className='btnaction mui-btn mui-btn--small mui-btn--primary'>
      Click
      </button>             
            
    </div> 

  )
}
