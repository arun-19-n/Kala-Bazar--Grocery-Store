import React, { useContext } from 'react'
import './css/shopcategory.css'
import { Shopcontext } from '../Context/Shopcontext'
import dropdown_icon from '../Components/assets/dropdown_icon.png'
import Items from '../Components/items/Items'
const Shopcategory = (props) => {
  const {all_product}=useContext(Shopcontext)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt=''/>
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12 </span> ...
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt=''/>
        </div>
      </div>
      <div className='shopcategory-products'>{all_product.map((item,i)=>{
        console.log(item);
        if(props.cate===item.category){
          return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        }
        else{
          return null
        }
      })}</div>
      <div className='shopcategory-loadmore'>
        This is the end of the page
      </div>
    </div>
  )
}

export default Shopcategory
