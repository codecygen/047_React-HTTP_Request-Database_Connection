In this project, we will fetch the movies list from a Rest API.

# Searchable Keywords:

## Firebase Database:
- React-HTTP_Request-Firebase_REST_API

Here we use Firabase Database. I created a new project with name react-httpRequest. Then from the project console, selected "Reacttime Database". This is a simpler database compared to "Firestore Database". Once created, I copy, pasted link to fetch API. The link was "https://react-httprequest-cf20a-default-rtdb.firebaseio.com". Then we added an extension like "/movies.json" to the end of the REST API. The is an endpoint which we will send fetch requests.

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

- React-HTTP_Request-POST_Request

- Javascript-JSON_to_Object-Object_to_String

In Javascript, both JSON (Javascript Object Notation) and Object formats are treated as Javascript Object.

```Javascript
// This is a Javascript Object
const myJavascriptObj = {
    test1: 'test1',
    test2: 'test2'
};

console.log(typeof(myJavascriptObj));
// Outputs
// > "object"
```

```Javascript
// This is a JSON (Javascript Object Notation), treated
// as an object in Javascript
const myJSONObj = {
    "test1": "test1",
    "test2": "test2"
}

console.log(typeof(myJSONObj));
// Outputs
// > "object"
```

There are 2 Javascript methods used in this project.  
1. Response.json()  
The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.  
Note that despite the method being named json(), the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.

2. JSON.stringify(argument)  
The JSON.stringify() method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.