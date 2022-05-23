import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
        <div className="container">
            <NavLink to={`/`} className="navbar-brand">React-Local-Storage</NavLink>

            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collase" id='"menu'>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to={`/home`} className="nav-link">Home</NavLink>
                    </li>
                    </ul>
                    <ul className="navbar-nav">                        
                    <li className="nav-item">
                        <NavLink to={`/login`} className="nav-link">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/register`} className="nav-link">Register</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/pnf`} className="nav-link">Pnf</NavLink>
                    </li>
                 </ul>
            </div>
        </div>
    </nav>
  )
}

export default Menu