import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovieHandler = async () => {
    const response = await fetch('https://swapi.dev/api/films');
    const data = await response.json();

    const transformedData = data.results.map(movie => {
      return {
        id: movie.episode_id,
        title: movie.title,
        openingText: movie.opening_crawl,
        releaseData: movie.created
      };
    });

    setMovies(transformedData);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
};

export default App;
