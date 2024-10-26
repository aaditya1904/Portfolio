import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header>
      <nav className='head'>
        <ul>
          <li className='bar-btn'>
            <NavLink to='/' style={{ textDecoration: 'none' }}>
              HOME
            </NavLink>
          </li>
          <li className='bar-btn'>
            <Link to='/about' style={{ textDecoration: 'none' }}>
              ABOUT
            </Link>
          </li>
          <li className='bar-btn'>
            <Link to='/projects' style={{ textDecoration: 'none' }}>
              PROJECTS
            </Link>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}

export default Header;
