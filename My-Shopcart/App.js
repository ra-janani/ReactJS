

import React, {useState} from 'react';
import Product from './Product';
import Cart from './Cart';
import './App.css';



function App() {
  const [cartItems,setCartItems]=useState([]);
  
  const addItems=(item)=>{
    setCartItems([...cartItems,{id:item.id,name:item.itemName,price:item.itemPrice}]);
}

console.log("cartItems:"+cartItems);
 
    return (
    <div> 
      <header className="block center">My eShop</header>
      <main className="block">
      <div className="row"><Product addItems={addItems}/></div>
        </main>
        <div className="block"><Cart itemName={cartItems}/></div>
        
      
        
    </div>
  );
}

export default App;