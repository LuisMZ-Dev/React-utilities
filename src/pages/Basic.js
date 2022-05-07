import React from 'react'
import { CaptureInput } from '../Components/CaptureInput';
import { Fetch } from '../Components/Fetch';
import { Counter } from '../Components/Counter';
import { LocalStorageCode } from '../Components/LocalStorageCode';
import { DarkLight } from '../Components/DarkLight';


export const Basic = () => {
  return (
    <div>
     <div className='father animate__animated animate__fadeIn '>      
      <div className='CapInput'><CaptureInput/></div>
      <div className = 'fetch' ><Fetch/></div>
      <div className = 'callHook' ><Counter/></div>
      <div className = 'local' ><LocalStorageCode/></div>
      <div id='darkLigth'className = 'darkfather' ><DarkLight/></div>
    </div > 

    </div>
  )
}
