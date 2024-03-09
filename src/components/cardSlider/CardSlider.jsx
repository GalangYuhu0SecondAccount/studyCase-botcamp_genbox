import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../cardSlider/CardSLider.css";
import {  responsive , Product } from "./dataAndProduct/data";
import Products from "./dataAndProduct/products";

const CardSlider = () => {

        const Productts = Product.map(( item ) => (
            <Products  key={item.id}
            name = {item.name}
            imageUrl = {item.imageurl}
            price = {item.price}
            description = {item.description}
            />
        ))
  return (
    <>
      <div>
        <Carousel showDots={true} centerMode={false} responsive={responsive} 
        customTransitionOptions={{
            enter: {
              transform: 'translateX(100%)'
            },
            exit: {
              transform: 'translateX(-100%)'
            }
          }}
        >
            {Productts}
      </Carousel>
      </div>
    </>
  );
};

export default CardSlider;
