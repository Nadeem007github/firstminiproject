import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
   <>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/profile/Nadeem/Trainer/50000">Profile</Link></li>
      
    </ul>
   </>
  )
}