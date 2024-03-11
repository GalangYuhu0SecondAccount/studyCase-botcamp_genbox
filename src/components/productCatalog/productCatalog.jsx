import React, { useEffect, useState } from "react";
import "../productCatalog/productCatalog.css";
import { useSelector } from "react-redux";
import ButtonCatalog from "./buttonCatalog";
import Pagination from "../pagination/pagination";

const ProductCatalog = () => {

   const [ currentPage , setcurrentPage ] = useState(1)
   const [ postPerPage , setpostPerPage ] = useState(0)
   

   // use redux
   const product = useSelector((state) => state.data.data);



   const indexOflastPost = currentPage * postPerPage;
   const indexOfFirstPost = indexOflastPost - postPerPage;
   const currentPost =  product.slice(indexOfFirstPost , indexOflastPost )


   const handlePagination = (pageNumber) => [
      setcurrentPage(pageNumber)
   ]

   return (
         <div className="product-catalog">
            <div className="text-head">
               <h2>Product</h2>
            </div>

            {/* Create catalog product */}
            <div className="catalog-grid">
               {/* mapping data  */}
               {currentPost.map((i) => (
                  <div className="catalog-item" key={i.id}>
                     <img src={i.image} alt="" className="images_product" />
                        <p className="name_product">{i.nameProduct}</p>
                        <p className="price">{i.price}</p>
                     <p className="desc">{i.description}</p>
                     <span className="icons">
                        <p><ButtonCatalog /> </p> 
                     </span>
                     <button>checkout</button>
                  </div>
               ))}
            </div>
            <div className="pagination"> 
               <Pagination 
               length={product.length}
               postPerPage={postPerPage}
               handlePagination={handlePagination}
               currentPage={currentPage}
               />
            </div>
      </div>
   );
};

export default ProductCatalog;
