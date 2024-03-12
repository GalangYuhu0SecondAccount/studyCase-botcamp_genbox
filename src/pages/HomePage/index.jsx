import React from 'react'
import Navbars from '../../components/NavbarSeconds/Navbar'
import CardSlider from '../../components/cardSlider/CardSlider'
import ProductCatalog from '../../components/productCatalog/productCatalog'
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
