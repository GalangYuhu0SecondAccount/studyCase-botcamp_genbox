import React from "react";
import "../productCatalog/productCatalog.css";
import {useSelector } from "react-redux";
import ButtonCatalog from "./buttonCatalog";

const ProductCatalog = () => {
   const product = useSelector(state  => state.data.data)

   return (
      <div className="product-catalog">
         <div className="text-head">
            <h2>Product</h2>
         </div>

         {/* Create catalog product */}
         <div className="catalog-grid">


            {/* mapping data  */}
            {product.map((i) => (
               <div className="catalog-item" key={i.id}>
                  <img src={i.image} alt="" className="images_product" />
                  <p className="name_product">{i.nameProduct}</p>
                  <p className="price">{i.price}</p>
                  <p className="desc">{i.description}</p>
                  <p className="desc">
                     <ButtonCatalog  />
                     </p>  
                  <button>checkout</button>
               </div>
            ))}
         </div>
      </div>
   );
};

export default ProductCatalog;
