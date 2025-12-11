import { useState } from "react";
import './App.css'

function App(){
  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false); // Start as false (Light mode)

  const increment = () => {
    setCount(count + 1);
  }

  const reset = () => {
    setCount(0);
  }

  return(
    // FIX 1: Change className based on isDark state
    <div className={isDark ? "card dark" : "card"}>
      
      <h1>Counter App</h1>
      <div className="count-display">
        <h1>{count}</h1>
      </div>

      <div className="buttons">
        <button onClick={increment}>+</button>
        <button onClick={reset}>0</button>
        
        {/* FIX 2: Use Arrow Function to prevent crash */}
        <button onClick={() => setIsDark(!isDark)}>
            {isDark ? "Light Mode ☀️" : "Dark Mode 🌙"}
        </button>
      </div>

      {/* Quick Styles for this demo */}
      <style>{`
        .card { background: white; color: black; padding: 20px; border-radius: 10px; transition: 0.3s; }
        .card.dark { background: #333; color: white; }
      `}</style>

    </div>
  )
}
export default App;