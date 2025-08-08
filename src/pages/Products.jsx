import React from 'react'
import { Footer, Navbar, Product } from "../components"
import ProductList from './ProductList'

const Products = () => {
  return (
    <>
      <Navbar />
      <ProductList/>
      <Footer />
    </>
  )
}

export default Products