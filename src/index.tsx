import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { BrowserRouter } from "react-router-dom";
import { Grommet } from 'grommet';
import * as serviceWorker from "./serviceWorker";
import { App } from "./app";
import stores, { StoresProvider } from "./stores";
import { theme } from "theme";

import "./styles.scss";

ReactDOM.render(
  <React.StrictMode>
    <StoresProvider stores={stores}>
      <Provider {...stores}>
        <Grommet theme={theme as any}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Grommet>

      </Provider>
    </StoresProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
