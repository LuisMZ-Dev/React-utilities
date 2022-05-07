import React, { useEffect, useState } from "react"

export const LocalStorageCode = () => {
  
  const ini = () => localStorage.getItem('1') || []
  const [save, setsave] = useState(ini)//
  const register = (e) =>{ setsave(e.target.value) };
  useEffect(() => {localStorage.setItem('1', save)},[save])//         
  const clean = () => localStorage.clear()

  return (

     <>
     <h4>LocalStorage</h4>
     <hr/>
     <form>
     <input className='input-group' type='text' onChange={register} />
     <hr/>
     <div>
     <button className='mui-btn mui-btn--small mui-btn--primary' type="submit">reload</button>   
     <button className='mui-btn mui-btn--small mui-btn--danger' onClick={clean}>limpiar</button>      
     </div>
     </form>
     <h4>{save}</h4>
     </>
  )
  
}
