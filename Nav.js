import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <nav className="Navigation-site">
      <ul>
        <li><a href="/home#home">Home</a></li>
        <li><a href="/home#about">About</a></li>
        <li><a href="/home#menu">Menu</a></li>
        <li><HashLink smooth to="/home#home">Home</HashLink></li>
        <li><HashLink smooth to="/home#about">About</HashLink></li>
        <li><HashLink smooth to="/home#menu">Menu</HashLink></li>
        <li><Link to="/Booking">Reservations</Link></li>
        <li><a href="/home#review">Reviews</a></li>
        <li><a href="/home#login">Login</a></li>
        <li><HashLink smooth to="/home#review">Reviews</HashLink></li>
        <li><HashLink smooth to="/home#login">Login</HashLink></li>
      </ul>
    </nav>
  );
}
