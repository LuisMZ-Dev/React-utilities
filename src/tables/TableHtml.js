import React from 'react'

export const TableHtml = () => {

  const listlocal = [
    {id:1, name: 'Luis', pais: 'Colombia'},
    {id:2, name: 'Juan', pais: 'Peru'},
    {id:3, name: 'Andres', pais: 'España'},
    {id:4, name: 'Pedro', pais: 'Chile'},
    {id:5, name: 'Julian', pais: 'Uruguay'},

  ]

  return (
    <div className='divtablehtml'>  
      <table className='tablehtml'>
          <thead>
              <tr>
                <th>Id</th>           
                <th>Nombre</th>               
                <th>Pais</th>               
              </tr>
          </thead>
          <tbody>
            {
              listlocal.map(dato=>              
              <tr className='rowhtml' key={dato.id}>
                  <td>{dato.id}</td>                   
                  <td>{dato.name}</td>                 
                  <td>{dato.pais}</td>                 
              </tr>                     
              )
            }
          </tbody>
      </table>
    </div>
  
    
  )
}