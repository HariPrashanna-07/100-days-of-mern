// src/App.jsx
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      
      {/* Instance 1 */}
      <ProfileCard 
        name="Hari Prashanna" 
        role="MERN Stack Dev" 
        location="India" 
        status="Coding..." 
      />

      {/* Instance 2 */}
      <ProfileCard 
        name="Alice Doe" 
        role="UI/UX Designer" 
        location="New York" 
        status="Designing" 
      />

      {/* Instance 3 */}
      <ProfileCard 
        name="John Smith" 
        role="Backend Engineer" 
        location="London" 
        status="Debugging" 
      />

    </div>
  );
}

export default App;