import React from "react";
import image  from  "../../../assets/pengelolaan.png"
        export default function Product({imageurl , name , price , description}) {
            return (
              <div className="cards">
                <img src={image} alt="product-image" className="product--image" />
                <h2>{name}</h2>
                <p className="price">{price}</p>
                <p>{description}</p>
                <p>
                  <button>Add to Cart</button>
                </p>
              </div>
            );
          }
    
    
