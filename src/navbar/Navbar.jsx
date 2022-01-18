import React from "react";
import "./styles.css";
import { Icon } from '@fluentui/react/lib/Icon';

const MyIcon = () => <Icon iconName="UserOptional" size="medium" />;

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container navbar__container">
          <h1>GRC</h1>
          <ul className="navbar__links">
            <li>
              <a href="enterprise.html"><MyIcon /></a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;