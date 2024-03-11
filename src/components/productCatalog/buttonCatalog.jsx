import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AiFillLike } from "react-icons/ai";


import { removeLike, addLike } from "../productCatalog/productCatalogSlice.js";

const ButtonCatalog = () => {
    const [isLike , setisLike ] = useState(false)
    const [Like , setLike ] = useState(10)


        const dispatch = useDispatch();

        const handleCLick = () => {
            setLike(Like  +  (isLike ? -1 : 1) )
            setisLike(!isLike)
            if (isLike) {
                dispatch(addLike(isLike))
            } else {
                dispatch(removeLike(isLike))
            }
      
     
    };

    return (
        <>
            <span onClick={handleCLick} aria-label="like">
                <AiFillLike   color={isLike  ?  "blue" : "black"} />
            </span>
        </>
    );
    };

export default ButtonCatalog;
