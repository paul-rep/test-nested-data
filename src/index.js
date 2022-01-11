import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from "@apollo/client";
import { AppContext } from './context/AppContext';
import reportWebVitals from './reportWebVitals';

import { client } from "./api/client/client";
import { getChildItems } from './utils/getChildItems'
import { getSelectedItem } from "./utils/getSelectedItem";
import { getItemCode } from "./utils/getItemCode";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AppContext.Provider
        value={{ getChildItems, getSelectedItem, getItemCode }}
      >
        <App />
      </AppContext.Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
