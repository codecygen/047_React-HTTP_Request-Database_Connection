import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  // React-HTTP_Request-Loadig_State
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  // React-HTTP_Request-Fetch_API
  const fetchMoviesHandler = async () => {
    // React-HTTP_Request-Loadig_State
    // loading starts here
    setIsloading(true);
    // We want to make sure we clear any previous errors here.
    setError(null);

    try {
      const response = await fetch('https://swapi.py4e.com/api/film');
      const data = await response.json();

      // data.results coming from the API object key, results is the key
      // Check out the link to see it.
      // Here we will transform the keys into the keys that we use in our
      // props in "MoviesList.js"
      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        };
      });

      setMovies(transformedMovies);
      // React-HTTP_Request-Loadig_State
      // loading ends here
      setIsloading(false);
    } catch (error) {

    }
  }


  // // Alternative asyncronous function handling
  // // React-HTTP_Request-Fetch_API
  // const fetchMoviesHandler = () => {
  //   // loading starts here
  //   setIsloading(true);
  //   // We want to make sure we clear any previous errors here.
  //   setError(null);
  //   // Here the default behaviour is get request
  //   // Default behavior of fetch API is GET request
  //   // 'then()' section is for asyncronous function.
  //   // Because getting the result of GET request
  //   // might take some time.
  //   // 'catch()' section is to catch any potential errors.
  //   // There are 2 'then' chains here, first one transforms the
  //   // json format to an object, second one 
  //   fetch('https://swapi.py4e.com/api/films').then(response => {
  //     return response.json();
  //   }).then(data => {
  //     // data.results coming from the API object key, results is the key
  //     // Check out the link to see it.
  //     // Here we will transform the keys into the keys that we use in our
  //     // props in "MoviesList.js"
  //     const transformedMovies = data.results.map(movieData => {
  //       return {
  //         id: movieData.episode_id,
  //         title: movieData.title,
  //         openingText: movieData.opening_crawl,
  //         releaseDate: movieData.release_date
  //       };
  //     });

  //     setMovies(transformedMovies);
  //     // loading ends here
  //     setIsloading(false);
  //   });
  // }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* React-HTTP_Request-Loadig_State */}
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {/* React-HTTP_Request-Loadig_State */}
        {!isLoading && movies.length === 0 && <p>No results found!</p>}
        {/* React-HTTP_Request-Loadig_State */}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
