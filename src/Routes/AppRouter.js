import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About } from '../pages/About'
import { Services} from '../pages/Services'
import { AppBar } from '../Components/AppBar' 
import { Home } from '../pages/Home';
import { Basic } from '../pages/Basic';
import { Tablesfor } from './Tablesfor';


export const AppRouter = () => {
  return (

    <Router>
      <AppBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>  
        <Route path='/basic' element={<Basic/>}/>  
        <Route path='/tables' element={<Tablesfor/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
      </Routes>
    </Router>

  )
}
