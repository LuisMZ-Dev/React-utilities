
import React, { useState } from 'react'
import '../tables.css'

import { TableMuiBasic } from '../tables/TableMuiBasic';
import { TableSortingSelecting } from '../tables/TableSortingSelecting';

export const Tablesfor = () => {

  const [state, setstate] = useState(1)

  const liOne = () => setstate(1) 
  const liTwo = () => setstate(2) 
  const liTree = () => setstate(3) 

  return (
    <>

      <ul className='ulTable animate__animated animate__fadeIn'>
        <li onClick={liOne} className='one'>Table Mui Basic</li>
        <li onClick={liTwo} className='one'>Sorting and Selecting</li>
        <li onClick={liTree} className='one'>Tres</li>
      </ul>
        
      <section className='szTable'>   
        <div>  { state === 1  && <TableMuiBasic/>} </div> 
        <div>  { state === 2  && <TableSortingSelecting/>} </div>
        <div>  { state === 3  &&  "table 3"} </div>
      </section>
    </>    
  )
}
