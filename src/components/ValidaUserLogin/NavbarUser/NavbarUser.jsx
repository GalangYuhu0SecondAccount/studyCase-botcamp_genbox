import React from "react";
import { Link } from "react-router-dom";
import  Images from   "../../../assets/Img_1.png"
import"../NavbarUser/NavbarUser.css";

const NavbarUser = () => {
  return (
    <div>
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
                 <div className="inputs">
                        <input type="text" placeholder="" required autoComplete="true" />
                        
                </div>
        </div>
            <div className="comp_Button">
                <h2>test</h2>
                {/* <span className="button1">button1</span> */}
                {/* <span className="button2">button2</span> */}
            </div>
      </div>
    </header>
    <div className="hero_image">
      <div className="image_middle">
        <img src={Images} alt=""  className="width_image"/>
      </div>
    </div>
    <div className="diskon">
    <h2>diskon 12.12 </h2>
    </div>
    </div>
  );
};

export default NavbarUser;
