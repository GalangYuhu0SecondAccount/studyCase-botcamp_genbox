import React from "react";
import { Link } from "react-router-dom";
import "../NavbarSeconds/Navbar.css";

const Navbars = () => {
  return (
    <header>
      <div className="menus">
        <ul className="ul_menus">
          <li>
            <Link to="/home">home</Link> |
          </li>
          <li>
            <Link to="/contact">Contact</Link> |
          </li>
          <li>
            <Link to="/price">Pricelist</Link> |
          </li>
        </ul>
      </div>
      <div className="headerNavbar">
        <h4 className="h4_content">MySHop</h4>
            <div className="test">
                 <div className="input">
                        <input type="text" placeholder="" required autoComplete="true" />
                        
                </div>
        </div>
            <div className="comp_Button">
                <span className="button1">button1</span>
                <span className="button2">button2</span>
            </div>
      </div>
    </header>
  );
};

export default Navbars;
