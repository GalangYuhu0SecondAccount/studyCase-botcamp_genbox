import { configureStore } from "@reduxjs/toolkit"
import dataProducts from "../components/ProductCatalog/productCatalogSlice.js"

export default configureStore ({
    reducer : {
        data:  dataProducts,
    }
})