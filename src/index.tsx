import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { Router } from "react-router";
import * as serviceWorker from "./serviceWorker";
import { App } from "./App";
import "./index.css";
import stores from "./stores";

ReactDOM.render(
  <React.StrictMode>
    <Provider {...stores}>
      <Router history={stores.routing?.history as never}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
