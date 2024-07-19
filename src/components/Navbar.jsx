import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <style jsx>{`
        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
        }

        .navbar {
          background-color: #333;
          overflow: hidden;
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
        }

        .navbar-logo {
          color: white;
          text-decoration: none;
          font-size: 24px;
        }

        .menu-icon {
          display: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-item {
          margin-left: 20px;
        }

        .nav-links {
          color: white;
          text-decoration: none;
          padding: 10px 20px;
        }

        .nav-links:hover {
          background-color: #575757;
          border-radius: 4px;
        }

        @media screen and (max-width: 768px) {
          .menu-icon {
            display: block;
          }

          .nav-menu {
            flex-direction: column;
            width: 100%;
            display: none;
          }

          .nav-menu.active {
            display: flex;
          }

          .nav-item {
            text-align: center;
            margin: 0;
          }

          .nav-links {
            width: 100%;
            padding: 14px;
          }
        }
      `}</style>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#" className="navbar-logo">
            MyLogo
          </a>
          <div className="menu-icon" onClick={toggleNavbar}>
            <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <a href="#" className="nav-links">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-links">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-links">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-links">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
