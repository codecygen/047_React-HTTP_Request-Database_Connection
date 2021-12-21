// React-HTTP_Request-useEffect-Loading_Movies_On_Website_Load
import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  // React-HTTP_Request-Loading_State
  const [isLoading, setIsloading] = useState(false);

  // React-HTTP_Request-Error_Handling
  // useState method is initiated for conditional rendering
  const [httpError, setHttpError] = useState(null);


  // React-HTTP_Request-Fetch_API
  // Here by default, because this function will change in every re-render
  // we have to use "useCallback" hook to treat "fetchMoviesHandler" as not changing.
  // Reason is that, we use this function in "useEffect" hook as a dependency.
  // Because theoretically, leaving the useEffect hook with an empty array of dependency
  // is a bad practice.
  // Check "Optimization" section in REACT - TABLE OF CONTENTS.
  const fetchMoviesHandler = useCallback(async () => {
    // React-HTTP_Request-Loading_State
    // loading starts here
    setIsloading(true);

    // React-HTTP_Request-Error_Handling
    // We want to make sure we clear any previous errors here.
    setHttpError(null);

    // React-HTTP_Request-Error_Handling
    try {
      // React-HTTP_Request-Error_Handling
      // Here fetch API will throw a 404 error if you have
      // "https://swapi.py4e.com/api/film"
      // instead of
      // "https://swapi.py4e.com/api/films"
      // because the link will be wrong so the app
      // will fail to fetch the data from the REST API.
      // ================================================================
      // Here, instead of using any of the links above
      // we will use Firebase REST API so that we can have GET and
      // POST request.
      // React-HTTP_Request-Firebase_REST_API
      // const response = await fetch('https://swapi.py4e.com/api/films');
      const response = await fetch('https://react-httprequest-cf20a-default-rtdb.firebaseio.com/movies.json');

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

      // Note that despite the method being named json(), 
      // the result is not JSON but is instead the 
      // result of taking JSON as input and parsing it to 
      // produce a JavaScript object.
      // Basically it converts a JSON data, which is still an object in Javascript
      // But "json()" method converts a JSON object to a pure Javascript object.
      // Javascript-JSON_to_Object-Object_to_String
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
  }, [])

  // React-HTTP_Request-useEffect-Loading_Movies_On_Website_Load
  // It is always a good practice to put dependencies
  // Here by default, because this function will change in every re-render
  // we have to use "useCallback" hook to treat "fetchMoviesHandler" as not changing.
  // Check "Optimization" section in REACT - TABLE OF CONTENTS.
  useEffect(() => {
    // Here we can call the event that we also call with button clicking.
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

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

  // React-HTTP_Request-POST_Request
  const addMovieHandler = async (movie) => {
    // React-HTTP_Request-POST_Request
    const response = await fetch('https://react-httprequest-cf20a-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      // As we said, JSON and object are both treated as
      // Javascript object. To convert a JSON object or Javascript object to
      // a String, use "JSON.stringify(myObject)" method.
      // Javascript-JSON_to_Object-Object_to_String
      body: JSON.stringify(movie),
      // This section is not required by Firebase
      // But a lot of REST APIs might require this line
      // So setting this up is not a bad idea.
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Firebase will send back data when we send a POST request.
    // Javascript-JSON_to_Object-Object_to_String
    const data = await response.json();

    console.log(data);
  };

  return (
    <React.Fragment>
      <section>
        {/* React-HTTP_Request-POST_Request */}
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
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
