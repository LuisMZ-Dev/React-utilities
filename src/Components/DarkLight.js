export const DarkLight = () => {  

const btnchange = () => {
  const darkfather = document.getElementById('darkLigth')
  darkfather.classList.toggle('dark')

  }

return (
    <>
        <h4>Dark - Ligth</h4>        
        <div >
        <button className='mui-btn mui-btn--small mui-btn--primary' onClick={btnchange } > on / off </button>
        <hr/>
        <p>Hello World</p>
        {/* <div id='dark' className={ `${dark.ok === true && 'dark' }`}>hi</div> */}
        </div>
    </>
  )
}
