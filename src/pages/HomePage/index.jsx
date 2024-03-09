import React from 'react'
import Navbars from '../../components/NavbarSeconds/Navbar'
import CardSlider from '../../components/cardSlider/CardSlider'
import ProductCatalog from '../../components/productCatalog/productCatalog'

const IndexRoot = () => {
  return (
    <div>
        <Navbars />
        <CardSlider />
        <ProductCatalog />
    </div>
  )
}

export default IndexRoot
