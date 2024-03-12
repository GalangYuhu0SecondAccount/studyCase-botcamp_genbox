import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import Images from "../../../assets/Img_1.png";
import "../NavbarUser/NavbarUser.css";
import DropdownItem from "../NavbarUser/dropdown/dropdownItem";

const NavbarUser = () => {
   const [open, setopen] = useState(false);

   const menuRef = useRef();

//    fungsi => menghilangkan menu tanpa harus meng klik icon User lagi 
   useEffect(() => {
      const handler = (e) => {
         if (!menuRef.current.contains(e.target)) {
            setopen(false);
            console.log(menuRef.current);
         }
      };
      document.addEventListener("mousedown", handler);

      return () => {
         document.removeEventListener("mousedown", handler);
      };
   });

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
                     <input
                        type="text"
                        placeholder=""
                        required
                        autoComplete="true"
                     />
                  </div>
               </div>
               <span className="userList">
                  <a href="" className="">
                     <BsCart3 />
                  </a>
               </span>
               <div className="comp_Button" ref={menuRef}>
                  <div
                     className="userList"
                     onClick={() => {
                        setopen(!open);
                     }}
                  >
                     <FaRegCircleUser className="icons1" />
                  </div>
               </div>
               {/* start create dropdown */}
               <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
                  <ul>
                     <Link to="/">
                        <DropdownItem text={"Profile"} />
                     </Link>
                     <Link to="/Whislist">
                        <DropdownItem text={"Whislist"} />
                     </Link>
                     <Link to="/pengaturanAkun">
                        <DropdownItem text={"Pengaturan Akun"} />
                     </Link>
                     <Link to="/Logout">
                        <DropdownItem text={"Logout"} />
                     </Link>
                  </ul>
               </div>
               {/*  */}
            </div>
         </header>
         <div className="hero_image">
            <div className="image_middle">
               <img src={Images} alt="" className="width_image" />
            </div>
         </div>
         <div className="diskon">
            <h2>diskon 12.12 </h2>
         </div>
      </div>
   );
};

export default NavbarUser;
