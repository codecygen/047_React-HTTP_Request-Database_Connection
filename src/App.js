import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  // React-HTTP_Request-Loading_State
  const [isLoading, setIsloading] = useState(false);

  // React-HTTP_Request-Error_Handling
  // useState method is initiated for conditional rendering
  const [httpError, setHttpError] = useState(null);

  // React-HTTP_Request-Fetch_API
  const fetchMoviesHandler = async () => {
    // React-HTTP_Request-Loading_State
    // loading starts here
    setIsloading(true);

    // React-HTTP_Request-Error_Handling
    // We want to make sure we clear any previous errors here.
    setHttpError(null);

    // React-HTTP_Request-Error_Handling
    try {
      // React-HTTP_Request-Error_Handling
      // Here this response will throw a 404 error if you have this link instead
      // "https://swapi.py4e.com/api/film"
      const response = await fetch('https://swapi.py4e.com/api/films');

      // React-HTTP_Request-Error_Handling
      // response.ok checks if response is ok
      if (!response.ok) {

        // response.status returns the status code for HTTP request. 
        // When the program throws the error, it will automatically jump
        // into the "catch" block and this line passes as an 'error'
        // argument into the "catch" block.
        // React-HTTP_Request-Error_Handling
        throw new Error(`Something went wrong. HTTP status: ${response.status}`);
      }

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

    } // React-HTTP_Request-Error_Handling
    catch (error) {
      // React-HTTP_Request-Error_Handling
      // The error argument takes its content from the line
      // throw new Error(`HTTP error! status: ${response.status}`);
      setHttpError(error.message);
    }

    // React-HTTP_Request-Loading_State
    // loading ends here
    setIsloading(false);
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
        
        {/* React-HTTP_Request-Loading_State */}
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}

        {/* React-HTTP_Request-Loading_State */}
        {!isLoading && movies.length === 0 && <p>No results found!</p>}

        {/* React-HTTP_Request-Loading_State */}
        {isLoading && <p>Loading...</p>}

        {/* React-HTTP_Request-Error_Handling */}
        {/* Here, if the httpError is "null", the conditional check will evaluate
        to false. If there is an actual error which is assigned in catch block
        up top, then httpError will hold a value other than null which will
        evaluate to true. */}
        {!isLoading && httpError && <p>{httpError}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
