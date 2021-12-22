In this project, we will fetch the movies list from a Rest API.

# Searchable Keywords:

## Firebase Database:
- React-HTTP_Request-Firebase_REST_API

Here we use Firabase Database. I created a new project with name react-httpRequest. Then from the project console, selected "Realtime Database". This is a simpler database compared to "Firestore Database". Once created, I copy, pasted link to fetch API. The link was "https://react-httprequest-cf20a-default-rtdb.firebaseio.com". Then we added an extension like "/movies.json" to the end of the REST API. The is an endpoint which we will send fetch requests and an instantaneous database will be created on Firebase.

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

Here, since this data fetching is not controlled by the user, we have to use "useEffect" hook. The button clicking event can also be called with "useEffect" hook which is used for calling the function upon new page load. Details are explained in the code block.

- React-HTTP_Request-GET_Request

- React-HTTP_Request-POST_Request

- Javascript-HTTPResponseToDataObject

"response" is an HTTP response with status code which is gotten with fetch API. "json()" method extracts the data that is received with "GET" or "POST" request. Despite the name is "json()", this method converts received data to a Javascript object. Javascript-HTTPResponseToDataObject

- Javascript-ObjectToJSON

In Javascript, JSON is a string with a formatted data, whereas object is a different format. There are different methods to convert them into each other. Examples are given down below.

```javascript
// Convert JSON to object
const JSONData = '{"x":5,"y":"hello"}';
const objData = JSON.parse(JSONData);

console.log(objData);
// Output: Object { x: 5, y: "hello" }
```

```javascript
// Convert object to JSON
const objData = { x: 5, y: "hello", z: true };
const JSONData = JSON.stringify(objData);

console.log(JSONData);
// Output: '{"x":5,"y":"hello","z":true}'
```


In order to convert a JSON data to object use "JSON.parse(JSONData)". In order to convert a Javascript object to a JSON data, use "JSON.stringify(javascriptObject)".