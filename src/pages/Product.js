import React, { useContext } from 'react'
import { Shopcontext } from '../Context/Shopcontext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/breadcrum/Breadcrum'
import Productdisplay from '../Components/productdisplay/Productdisplay'
import Description from '../Components/description/Description'
import Relatedproducts from '../Components/relatedproducts/Relatedproducts'

const Product = () => {
  const {all_product}=useContext(Shopcontext)
  const {productid}=useParams()
  const product = all_product.find((e)=> e.id === Number(productid))
  console.log("Product ID:", productid);  // Check productid value
console.log("Product:", product); 
console.log("hi hello"); 
  return (
    <div>
      <Breadcrum product={product}/>
      <Productdisplay  product={product} />
      <Description />
      <Relatedproducts />

    </div>
  )
}

export default Product
