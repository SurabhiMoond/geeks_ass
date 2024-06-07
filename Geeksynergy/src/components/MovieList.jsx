import { useState } from 'react';

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({ category: '', language: '', genre: '', sort: '' });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const addData = (e) => {
    e.preventDefault();
    // Create a copy of the current movies array and add the new movie to it
    const updatedMovies = [...movies, { ...newMovie, id: Date.now() }]; // Using Date.now() for a simple unique ID
    setMovies(updatedMovies); // Update the state with the new array
    // Clear the form after submission
    setNewMovie({ category: '', language: '', genre: '', sort: '' });
  };

  return (
    <div>
      <h2>Movie List</h2>
      <form onSubmit={addData}>
        <div>
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={newMovie.category}
            onChange={handleChange}
          />
          <input
            type="text"
            name="language"
            placeholder="Language"
            value={newMovie.language}
            onChange={handleChange}
          />
          <input
            type="text"
            name="genre"
            placeholder="Genre"
            value={newMovie.genre}
            onChange={handleChange}
          />
          <input
            type="text"
            name="sort"
            placeholder="Sort"
            value={newMovie.sort}
            onChange={handleChange}
          />
          <button type="submit">Add Data</button>
          
        </div>
      </form>
     <div style={{display:'flex',gap:'3%',marginTop:'10%'}}>
     {movies.map((movie) => (
        <div key={movie.id} style={{width:'200px',height:'300px' ,border:'1px solid green',textAlign:'center',backgroundColor:'#a7e488',color:'rgb(95, 93, 91)'}}>
          <h3>Category : {movie.category}</h3>
          <p>Language : {movie.language}</p>
          <p>Genre : {movie.genre}</p>
          <p>SortBy : {movie.sort}</p>
        </div>
      ))}
     </div>
    </div>
  );
};