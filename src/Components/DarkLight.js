export const DarkLight = () => {  

const btnchange = () => {
  const darkfather = document.getElementById('darkLigth')
  darkfather.classList.toggle('dark')
  }

return (        
        <div >
        <button className='mui-btn mui-btn--small mui-btn--primary' onClick={btnchange } > dark / Ligth </button>
        <hr/>
        <p>Hello World</p>
        {/* <div id='dark' className={ `${dark.ok === true && 'dark' }`}>hi</div> */}
        </div>
  )
}
