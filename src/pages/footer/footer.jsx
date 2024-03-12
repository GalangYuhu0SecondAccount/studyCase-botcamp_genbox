import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineWhatsApp } from "react-icons/ai";
import "../footer/footer.css";
const Footers = () => {
   return (
      <>
         <footer>
            <h2>
               <center>Shop</center>
            </h2>
            <div className="footer_start">
               <div className="footer_image">
                  <a href="">
                     <FaFacebookF />
                  </a>
               </div>
               <div className="footer_image">
                  <a href="">
                     <FaInstagram />
                  </a>
               </div>
               <div className="footer_image">
                  <a href="">
                     <AiOutlineWhatsApp  />
                  </a>
               </div>
            </div>
            <p className="copyright">&copy;GenboxAcademy2024</p>
         </footer>
      </>
   );
};

export default Footers;
