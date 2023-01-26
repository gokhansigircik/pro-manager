import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <navbar className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container">
        <span className="navbar-brand">MANAGER LIST</span>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className='nav-link' to='/managers'>All Managers</Link>
          </li>
        </ul>
      </div>
    </navbar>
  )
}

export default Navbar;