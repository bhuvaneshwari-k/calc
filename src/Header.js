import React from 'react'
import Themeselector from "./Themeselector.js";
import './header.css';
function Header(handleTheme) {
  return (
    <div className='header'>
    <div className='heading'>CALCULATOR</div>
    <div className='theme-selector'>
    <Themeselector handleTheme={handleTheme}></Themeselector></div>
    </div>
  )
}

export default Header;