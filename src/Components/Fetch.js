import React, { useState } from 'react'

export const Fetch = () => {
    const ini = []
    const [{url}, setdatos] = useState(ini)

const callApi = async () =>{
const res = await fetch('https://picsum.photos/200/300')

setdatos(res)
}

const reset = () =>{ setdatos(ini) };

  return (
   <>
   <h4>Fetch</h4>
   <hr/>
   <div>
   <button className='mui-btn mui-btn--small mui-btn--primary' onClick={callApi} > llamar </button>
   <button className='mui-btn mui-btn--small mui-btn--danger' onClick={reset} > borrar </button>
   </div>
   <hr/>
   <div><img alt='Imagen Eliminada' src={url}/></div> 
       
   </>
  )
}
