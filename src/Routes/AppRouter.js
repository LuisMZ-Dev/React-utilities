import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Services} from '../pages/Services'
import { AppBar } from '../Components/AppBar' 
import { Home } from '../pages/Home';
import { Basic } from '../pages/Basic';
import { Tablesfor } from './Tablesfor';
import { Events } from '../pages/Events';


export const AppRouter = () => {
  return (

    <Router>
     <AppBar/> 
      <Routes>
        <Route path='/' element={<Home/>}/>  
        <Route path='/basic' element={<Basic/>}/> 
        <Route path='/tables' element={<Tablesfor/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/services' element={<Services/>} />
      </Routes>
    </Router>

  )
}
