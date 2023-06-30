import React from 'react'
import './header.css';
function Themeselector(props) {
  return (
    <div className='themeselector-cont'>
        <div className='themehead'>Theme</div>
        <div className='theme-select'>
        <div className='theme-number'>
            <div className='theme-number-1'>1</div>
            <div className='theme-number-2'>2</div>
            <div className='theme-number-3'>3</div>
        </div>
        <div className='theme-button'>
            <button className='theme-button-basic active' onClick={(e)=>(props.handleTheme(e))}></button>
            <button className='theme-button-light'></button>
            <button className='theme-button-dark'></button>
        </div>
        </div>
    </div>
  )
}

export default Themeselector