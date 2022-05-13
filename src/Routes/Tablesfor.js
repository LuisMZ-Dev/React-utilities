
import React, { useState } from 'react'
import '../tables.css'

import { TableMuiBasic } from '../tables/TableMuiBasic';
import { List } from '../tables/List';
import { TableSortingSelecting } from '../tables/TableSortingSelecting';
import { TableHtml } from '../tables/TableHtml';

export const Tablesfor = () => {

  const [state, setstate] = useState(1)

  const liOne = () => setstate(1) 
  const liTwo = () => setstate(2) 
  const liTree = () => setstate(3) 
  const liFour = () => setstate(4) 

  return (
    <>
      <ul className='ulTable animate__animated animate__fadeIn'>
        <li onClick={liOne} className='one'>Mui Basic</li>
        <li onClick={liTwo} className='one'>Mui Sorting and Selecting</li>
        <li onClick={liTree} className='one'>List</li>
        <li onClick={liFour} className='one'>Table/todo HTML</li>
      </ul>

      
        
      <section className='szTable animate__animated animate__fadeIn'>   
        <div>  { state === 1  && <TableMuiBasic/>} </div> 
        <div>  { state === 2  && <TableSortingSelecting/>} </div>
        <div>  { state === 3  &&  <List/>} </div>
        <div>  { state === 4  &&  <TableHtml/>} </div>
      </section>
    </>    
  )
}
