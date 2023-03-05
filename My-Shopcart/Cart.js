import React from 'react';

function Cart({itemName}){
    const {itemNames}=itemName;
   
console.log("items inside cart:"+itemName);

    return(
        <> {itemName.length===0 &&<h1>cart is empty</h1>}
        {itemName.map((item)=><div key={item.id}><h3>{item.name}</h3></div>)}</>
           
           
        
    );
  
}

export default Cart;