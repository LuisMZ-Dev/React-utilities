import { CaptureInput } from './Components/CaptureInput';
import './app.css'
import { Fetch } from './Components/Fetch';
import { ViewHookCounter } from './ExportUseHooks/ViewHookCounter';
import { LocalStorageCode } from './Components/LocalStorageCode';
import { DarkLight } from './Components/DarkLight';


function App() {
  return (
    <>
    <h1>React components and hooks codes</h1>
    <div className='father animate__animated animate__fadeIn '>      
      <div className='CapInput'><CaptureInput/></div>
      <div className = 'fetch' ><Fetch/></div>
      <div className = 'callHook' ><ViewHookCounter/></div>
      <div className = 'local' ><LocalStorageCode/></div>
      <div id='darkLigth'className = 'darkfather' ><DarkLight/></div>
    </div >
    </>
  );
}

export default App;
