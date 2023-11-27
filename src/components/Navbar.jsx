import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='nav-container'>
        <Link to='/'><img src="src\assets\home-icon.png" alt="Logo" /></Link>
        
    </div>
  )
}
