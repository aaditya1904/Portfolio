import React from 'react'
import{Link,NavLink} from "react-router-dom"
import './header.css'

function Header() {
  return (
   <header>
    <nav  className='head'> 
      <ul>
      <li className='bar-btn' ><NavLink to = '/' style={{color:"white",textDecoration:"none"}}>HOME</NavLink></li>
      <li className='bar-btn' ><Link to = '/about' style={{color:"white",textDecoration:"none"}}>ABOUT</Link></li>
      <li className='bar-btn' ><Link to = '/projects' style={{color:"white",textDecoration:"none"}}>PROJECTS</Link></li>
    </ul>
    </nav>
   </header>
  )
}

export default Header
