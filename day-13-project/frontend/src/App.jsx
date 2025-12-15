import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  // FETCH DATA WHEN PAGE LOADS
  useEffect(() => {
    axios.get('http://localhost:3000/movies')
      .then((response) => {
        console.log("Data received:", response.data); // Check console if it fails
        setMovies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>🎬 My Movie Watchlist</h1>
      
      {/* If no movies, show a message */}
      {movies.length === 0 && <p>No movies found. Add some using Thunder Client!</p>}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" }}>
        
        {movies.map((movie) => (
          <div key={movie._id} style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "20px",
              backgroundColor: movie.hasWatched ? "#d4edda" : "#f8d7da",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
          }}>
            <h2 style={{ margin: "0 0 10px 0" }}>{movie.title}</h2>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Rating:</strong> {movie.rating}/10</p>
            <p>
                {movie.hasWatched ? "✅ Watched" : "🍿 Not Watched"}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}

export default App;