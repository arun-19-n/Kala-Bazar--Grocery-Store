import React from 'react'
import "./popular.css"
import data_product  from '../assets/data'
import Items from '../items/Items'

const Popular = () => {
  return (
    <div className='popular'>
      <br/>
      <h1>POPULAR IN DRY FRUITS</h1>
      <br/>
      <br/>
      <hr/>
      <div className='popular-item'>
        {data_product.map((item,i)=>{
                    return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
      </div>
    </div>
  )
}

export default Popular
