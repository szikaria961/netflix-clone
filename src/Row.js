import React, { useState, useEffect } from 'react';
import axios from './axios';
import "./Row.css";

const BASE_URL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //when row component loads, make a request to TMDB
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);
  return (
    <div classname="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {/* several row_posters */}
        {movies.map(movie => (
          <img
            className="row_poster"
            src={`${BASE_URL}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>

    </div>
  );
}

export default Row;