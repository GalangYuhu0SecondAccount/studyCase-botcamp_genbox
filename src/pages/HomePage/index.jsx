import React from 'react'
import Navbars from '../../components/Navbars/Navbar.jsx'
import CardSlider from '../../components/cardSlider/CardSlider'
import ProductCatalog from '../../components/ProductCatalog/productCatalog.jsx'
import Footers from '../footer/footer'

const IndexRoot = () => {
  return (
    <div>
        <Navbars />
        <CardSlider />
        <ProductCatalog />
        <Footers />
    </div>
  )
}

export default IndexRoot
