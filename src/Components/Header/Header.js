import React from 'react'
import {Link} from 'react-scroll'
import './Header.css'
function Header() {
  return (
    <div className='header'>
        <div className='header-left'>
            <h1>
                <spam>React</spam>-Developer
            </h1>
        </div>
        <div className='header-right'>
            <Link to='about' smooth={true} duration={300}>
                <h4>About Me</h4>
            </Link>
            <Link to='education' smooth={true} duration={300}>
                <h4>Education</h4>
            </Link>
            <Link to='skill' smooth={true} duration={300}>
                <h4>Skills</h4>
            </Link>
            <Link to='project' smooth={true} duration={300}>
                <h4>Projects</h4>
            </Link>
            <Link to='contact' smooth={true} duration={300}>
                <h4>Contact</h4>
            </Link>
            <h4>Join with me</h4>
        </div>
      
    </div>
  )
}

export default Header
