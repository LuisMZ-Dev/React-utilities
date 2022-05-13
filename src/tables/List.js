import React from 'react'
import { useList } from '../useHooks/useList'

export const List = () => {

const listlocal = [
  {id:1, name: 'Luis'},
  {id:2, name: 'Juan'},
  {id:3, name: 'Andres'},
  {id:4, name: 'Pedro'},
  {id:5, name: 'Julian'},
  {id:6, name: 'Marcos'},
  {id:7, name: 'Raul'},
  {id:8, name: 'Miguel'},
  {id:9, name: 'Jose'},
  {id:10, name: 'Jhon'}
]

  return (
    <div className='list'> 
    <ol>
      {useList(listlocal)}
    </ol>
    </div>
    
  )
}
