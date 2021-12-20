In this project, we will fetch the movies list from a Rest API.

Searchable Keywords:
- React-HTTP_Request-Fetch_API

Fetch API:  
This is a built in Javascript interface for accessing and manipulating of the HTTP pipeline.

axios:  
This is an npm package. Promise based HTTP client for the browser and node.js. It is an alternative to Fetch API.

- React-HTTP_Request-Loading_State

Because fetching the data from an API will take some time, we need to introduce a loading state to let the person know if we could have fetched a data and/or if our app is still busy getting the data from the external server (API).

- React-HTTP_Request-Error_Handling

Check out this page for asyncronous functions for error handling

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await

- React-HTTP_Request-useEffect-Loading_Movies_On_Website_Load

Here, since this data fetching is not controlled by the user, we have to use "useEffect" hook. The button clicking event can also be called with "useEffect" hook. Details are explained in the code block.