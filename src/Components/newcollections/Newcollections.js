import React from 'react'
import './newcollections.css'
import new_collections from '../assets/new_collections'
import Items from '../items/Items'

const Newcollections = () => {
  return (
    <div className='newcollections'>
      <h1>Fresh Stock</h1>
      <hr/>
      <div className='collection'>
    {new_collections.map((item,i)=>{
        return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    })}
      </div>
    </div>
  )
}

export default Newcollections
