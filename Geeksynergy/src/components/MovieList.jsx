import { useState, useEffect } from "react";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        "https://geeksynergy-backend.onrender.com/api/movieList",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            category: "movies",
            language: "kannada",
            genre: "all",
            sort: "voting",
          }),
        }
      );
      const data = await response.json();
      setMovies(data.result);
      console.log(data.result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Movie List</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr ",
          gap: "3%",
          margin: "0 0 0 10%",
          width: "50%",
          alignItems: "center",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie._id}
            style={{
              width: "300px",
              height: "150px",
              border: "1px solid green",
              textAlign: "center",
              backgroundColor: "#a7e488",
              color: "rgb(95, 93, 91)",
            }}
          >
            <p>Language : {movie.language}</p>
            <p>Genre : {movie.genre}</p>
            {/* <p>SortBy : {movie.sort}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};
