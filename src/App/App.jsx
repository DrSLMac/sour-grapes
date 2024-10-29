// import { useState, useEffect } from 'react';
import MoviesContainer from "../MoviesContainer/MoviesContainer";
import moviePosters from "../data/movie_posters";
import MoviePoster from "../MoviePoster/MoviePoster";
// import movieDetails from '../data/movie_details';
// import searchIcon from '../assets/search.png';
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [error, setError] = useState('')

  useEffect(() => {
    getMovies()
  },[])

  function getMovies() {
    fetch('https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies')
    .then(response => response.json())
    .then(data => setAllMovies([...data]))
    .catch(error => {
      console.log(error)
      setError('Oops! Something went wrong! Please try again in a couple minutes.')
    })
  }

  function updateVoteCount(id, direction) {
    console.log("direction: ", direction)
    fetch(`https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        vote_direction: direction
      }), 
    })
    .then(response => response.json())
    .then(data => {
      console.log("vote count update: ", data);
      return data
    })
    .catch(error => {
      console.log(error)
      setError('Oops! Something went wrong! Please try again in a couple minutes.')
    })
  }
  
  const increaseVoteCount = (id) => {
    const updatedMovies = allMovies.map((movie) => {
      if (movie.id !== id) {
        return movie;
      }
    updateVoteCount(movie.id, 'up');
    return { ...movie, vote_count: movie.vote_count + 1}
  })
  setAllMovies(updatedMovies)
  }

  const decreaseVoteCount = (id) => {
    const updatedMovies = allMovies.map((movie) => {
      if (movie.id !== id) {
        return movie;
      }
    updateVoteCount(movie.id, 'down');
    return { ...movie, vote_count: movie.vote_count - 1}
  })
  setAllMovies(updatedMovies)
  }

  return (
    <main className="App">
      <header>
        <h1>🍇 sour grapes 🍇</h1>
      </header>
      {error && <h2>{error}</h2>}
      <MoviesContainer 
        allMovies={allMovies} 
        increaseVoteCount={increaseVoteCount}
        decreaseVoteCount={decreaseVoteCount}
      />
    </main>
  );
}

export default App;
