import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import FetchDataProvider from "./context/FetchDataContext";
import FetchRemediationProvider from "./context/FetchRemidiation";
import ExposedCredentialsProvider from "./context/ExposedCredentials";

ReactDOM.render(
  <React.StrictMode>
    <FetchDataProvider>
      <FetchRemediationProvider>
        <ExposedCredentialsProvider>
          <App />
        </ExposedCredentialsProvider>
      </FetchRemediationProvider>
    </FetchDataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
