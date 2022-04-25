import React from 'react';
import './css/navbar.css'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';


// angelique@moringaschool.com 

export default function Navbar() {

  return (
    <>
       <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="/">emaids</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <MenuIcon />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">About Us</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Authentication
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="/maids">Available house maids</a></li>
                    <li><a className="dropdown-item" href="/register">Sign Up</a></li>
                    <li><a className="dropdown-item" href="/login">Login</a></li>
                    <li><a className="dropdown-item" href="/logout">
                      <ExitToAppIcon />
                       Logout
                      </a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
      </nav>
    </>
  );
}
