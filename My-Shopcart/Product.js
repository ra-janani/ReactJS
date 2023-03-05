import React from 'react';
import data from './data';

function Product(props)
{
    const {addItems}=props;
    const { items } = data;

    return(
        <>
       {items.map((item)=><div  key={item.id}>
        <img src={item.itemImage} alt={item.itemName}/>
       <h3>{item.itemName}</h3>
       <h3>£{item.itemPrice}</h3>
       <button onClick={()=>addItems(item)}> Add to cart </button></div>)}
      </>
    );
}

export default Product;