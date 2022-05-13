import React from 'react'
import { CaptureInput } from '../Components/CaptureInput';
import { Fetch } from '../Components/Fetch';
import { Counter } from '../Components/Counter';
import { LocalStorageCode } from '../Components/LocalStorageCode';
import { DarkLight } from '../Components/DarkLight';
import { ModalWindowHTML } from '../Components/ModalWindowHTML';
import { WindowForm } from '../Components/WindowForm';


export const Basic = () => {



  return (
    

     <div className='father animate__animated animate__fadeIn '>
       <WindowForm />   
      <div className='CapInput'><CaptureInput/></div>
      <div className = 'CapInput' ><Fetch/></div>
      <div className = 'CapInput' ><Counter/></div>
      <div className = 'CapInput' ><LocalStorageCode/></div>
      <div  ><DarkLight/></div>
      <div id=''className = 'CapInput' ><ModalWindowHTML/></div>
    </div > 


  )
}
