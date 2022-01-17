import React from "react";
import "./styles.css";
import { FaRegUserCircle } from 'react-icons/fa';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container navbar__container">
          <h1>GRC</h1>
          <ul className="navbar__links">
            <li>
              <a href="enterprise.html"><FaRegUserCircle size={35} color="#fff"/></a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;