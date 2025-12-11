import { useState } from "react";
import "./App.css";

function App() {
  // 1. The Main List (The Shopping Cart)
  const [cart, setCart] = useState(["MacBook Pro", "iPhone 15"]);

  // 2. The "Holding Area" (For the input box)
  const [itemName, setItemName] = useState("");

  // --- DELETE FUNCTION (You already built this!) ---
  const deleteItem = (indexToDelete) => {
     const newCart = cart.filter((item, index) => index !== indexToDelete);
     setCart(newCart); 
  };

  // --- ADD FUNCTION (New Lesson!) ---
  const addItem=()=>{
    if (itemName==="")return ;
    const newCart=[...cart,itemName]
    setCart(newCart)
setItemName("")
  }

  return (
    <div className="card">
      <h1>🛒 Shopping Cart</h1>

      {/* --- THE INPUT SECTION --- */}
      <div style={{ marginBottom: "20px" }}>
        <input 
          type="text"
          placeholder="What do you need?"
          value={itemName} 
          onChange={(e) => setItemName(e.target.value)}
        />
        <button onClick={addItem}>Add Item</button>
      </div>

      {/* --- THE LIST SECTION --- */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {cart.map((item, index) => (
          <li key={index} style={{ border: "1px solid #444", margin: "10px", padding: "10px", display: "flex", justifyContent: "space-between" }}>
            <span>{item}</span>
            <button 
                style={{ background: "#ff4d4d", cursor: "pointer" }}
                onClick={() => deleteItem(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;