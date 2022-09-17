import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// importing app.js in index.js
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

// create the link between react app and gql
const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  // if we run the same query twice, query is going to hit the memory not server
  cache: new InMemoryCache()
})

// call App.js && input the connection between react and gql
// app file is called from here 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
