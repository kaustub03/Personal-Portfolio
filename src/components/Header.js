import React from "react";

function Header() {
    return (
    <nav id="header" className="navbar fixed-top navbar-dark bg-dark px-3 mb-3">
        <span className='navbar-brand' href='#'>Welcome!</span>
        <ul className='nav nav-pills'>
          <li className='nav-item'>
            <a className='nav-link' href='#skill'>Skills</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#language'>Languages</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#project'>Projects</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#hobby'>Hobbies</a>
          </li>
        </ul>
    </nav>
    )
}

export default Header