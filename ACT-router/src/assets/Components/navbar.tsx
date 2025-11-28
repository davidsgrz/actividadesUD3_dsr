import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div>
        <ul className="nav-links">
          <li>
            <Link to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/about-us">
              About us
            </Link>
          </li>
          <li>
            <Link to="/usuario/david">
              Habilidades de David
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
