import React, { createContext, useState } from "react";
import all_product from '../Components/assets/all_product'

export const Shopcontext = createContext(null);
const getDefaultCart=()=>{
    let cart={}
    for(let i=0;i<all_product.length+1;i++){
        cart[i]=0
    }
    return cart
}
const Shopcontextprovider=(props)=>{
    const [cartitems,setcartitems]=useState(getDefaultCart())
    const [isLoggedIn, setIsLoggedIn] = useState(false);
   
    const addtocart=(itemid)=>{
        setcartitems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
        console.log(cartitems)
    }
    const removefromcart=(itemid)=>{
        setcartitems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
        console.log(cartitems)

    }
    const gettotalcartamount=()=>{
        let totalamount=0;
        for(const item in cartitems){
            if(cartitems[item]>0){
                let iteminfo=all_product.find((product)=>product.id===Number(item))
                totalamount+=iteminfo.new_price*cartitems[item]
            }
           
        }
        return totalamount
    }
    const gettotalcartitems=()=>{
        let totalitem=0
        for(const item in cartitems){
            if(cartitems[item]>0){
                totalitem+=cartitems[item]
            }
        }
        return totalitem
    }
    const contextvalue= { isLoggedIn,setIsLoggedIn,gettotalcartitems,gettotalcartamount,all_product,cartitems,addtocart,removefromcart}
  
    return (
        <Shopcontext.Provider value={contextvalue}>{props.children}</Shopcontext.Provider>
    )
}
export default Shopcontextprovider