import React from "react";
import "../productCatalog/productCatalog.css";
import { useState } from "react";

const ProductCatalog = () => {
   const [States, setStates] = useState();

   return (
      <div className="product-catalog">
         <div className="text-head">
            <h2>Product</h2>
         </div>

         {/* Create catalog product */}
         <div className="catalog-grid">
            <div className="catalog-item">
               <img src="" alt="" className="images_product" />
               <p className="name_product">Product 1</p>
               <p className="price">Rp,32000</p>
               <p className="desc">desr</p>
               <button>checkout</button>
            </div><br />
            <div className="catalog-item"></div>
            <div className="catalog-item"></div>
            <div className="catalog-item"></div>
            <div className="catalog-item"></div>
            <div className="catalog-item"></div>
            <div className="catalog-item"></div>
         </div>
      </div>
   );
};

export default ProductCatalog;
