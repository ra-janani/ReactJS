import React,{useState} from "react";

function App() {

  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [strike, setStrike] = useState(false);
  
  const itemId = items.length + 1;
  const len=itemName.length;
  const aLen=items.length;
  
	
  const addItem = (e) => {
    
	const itemId = items.length + 1;
    setItems((items)=>[...items,
      {
		  id:itemId,
        name: itemName
      },]);
    
    setItemName("");
  };
  
  const delItem=(e)=>{
	  setItems([]);
	}
  
  const strikeItem = (index) => {
    const updatedItems = items.filter((item) => {
      if (index == item.id) {
		  setStrike(!strike);
		  item.strike=strike;
      }
      return item;
    });

    setItems(updatedItems);
  };
  
  
  const enterAdd=(e)=>{	  
	  if(e.key==="Enter"){
		addItem(); 
	  }
  };
	  
  return (
	<>	
      <div className="Container" >
	  <h1> My shopping list</h1>
        <h2> Type the items</h2>
          <div id="header">
		  <input className="text"
            name="item"
            type="text"
            value={itemName}
            onChange={e => setItemName(e.target.value)} onKeyDown={enterAdd}/>
			
			<span>
			<button onClick={addItem}> ADD ITEM</button>
		    </span>
			</div>
      
      <ul>
        {items.map((item) => (
		<li key={item.id} onClick={() => strikeItem(item.id)}
		style={{textDecoration: item.strike ? 'line-through' : 'none'}}>{item.name}</li>
         
        ))}
		
      </ul>	  
	  <button disabled={aLen==0} onClick={delItem}>CLEAR ITEMS</button>
	  </div>
	  <h3>*click on the item to mark it complete</h3>
    </>
	
  );
  }
export default App;