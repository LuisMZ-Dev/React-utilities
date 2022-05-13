import React from 'react'

export const WindowForm = () => {

  const btnx= (e) =>{
    e.preventDefault()
    const modal = document.getElementById('wmodal')
    modal.classList.toggle('activemodal')
    };

  return (
     
      <div id='wmodal' className='form-modal'> 
      <form className='formsz'>
        <div className='btn-xdiv'>
        <button className='btnx' onClick={btnx}>x</button>      
        </div>
        <div className='btn-action'>
          <p>Modal HTML</p>       
        </div>
        <hr/>
        <div> 
        <span>Nombre: </span>
        <input  type='placeholder' />
        </div>
        <hr/>
        <div>
        <span>Apellido: </span>
        <input  type='placeholder' />
        </div>
        <div className='action'> 
        <button
        onClick={btnx}
        className='mui-btn mui-btn--small mui-btn--primary'>Enviar</button>
        </div>
      </form>
      </div> 
    
  )
}

