import { configureStore } from "@reduxjs/toolkit"
import dataProducts from "../components/productCatalog/productCatalogSlice"

export default configureStore ({
    reducer : {
        data:  dataProducts,
    }
})