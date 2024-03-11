import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AiFillLike } from "react-icons/ai";


import { removeLike, addLike } from "../productCatalog/productCatalogSlice.js";

const ButtonCatalog = () => {
    const [isLike , setisLike ] = useState(false)
    const [Like , setLike ] = useState(450)


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
            <p onClick={handleCLick} aria-label="like">
                <AiFillLike  color={isLike  ?  "blue" : "black"} />
                <p>hasil :{Like}</p>
            </p>
        </>
    );
    };

export default ButtonCatalog;
