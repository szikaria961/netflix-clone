import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';

const BASE_URL = "https://image.tmdb.org/t/p/original/";

function Banner(props) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    return request;
  }
  fetchData();
  }, []);

  console.log(movie);

  return (
    <header className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
          "${BASE_URL}${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center"
      }}
    >
      <div className="banner_contents"></div>
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{movie?.overview}</h1>
    </header>
  );
}

export default Banner;