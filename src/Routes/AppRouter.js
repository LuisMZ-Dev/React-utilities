import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Tablesfor } from '../pages/Tablesfor'
import { About } from '../pages/About'
import { Services} from '../pages/Services'
import { AppBar } from '../Components/AppBar' 
import { Basic } from '../pages/Basic';


export const AppRouter = () => {
  return (
    <div>
    <Router>
      <AppBar/> 
      <Routes>
        <Route path='/' element={<Basic/>}/>
        <Route path='/tables' element={<Tablesfor/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
      </Routes>
    </Router>
    </div>
  )
}
