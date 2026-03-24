import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/navbar.css'

export default function Navbar(){
  return (
    <header className="navbar">
      <div className="brand"><Link to="/">Sudoku</Link></div>
      <input id="nav-toggle" className="nav-toggle" type="checkbox" />
      <label htmlFor="nav-toggle" className="nav-toggle-label">Menu</label>
      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/games" end>Selections</NavLink></li>
        <li><NavLink to="/games/normal">Normal Game</NavLink></li>
        <li><NavLink to="/games/easy">Easy Game</NavLink></li>
        <li><NavLink to="/rules">Rules</NavLink></li>
        <li><NavLink to="/scores">High Scores</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
      </ul>
    </header>
  )
}
