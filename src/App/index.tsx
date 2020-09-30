import React from "react";
import { Switch, Route } from "react-router-dom";
import { BaseContainer } from "./components/BaseContainer";
import "./App.css";

export const App = () => {
  return (
    <BaseContainer>
      <Switch>
        <Route
          exact={true}
          path={'/game'}
          component={() => <div>game</div>}
        />
        <Route
          exact={true}
          path={'/armory'}
          component={() => <div>armory</div>}
        />
        <Route
          exact={true}
          path={'/about'}
          component={() => <div>about</div>}
        />
        <Route
          exact={true}
          path={'/'}
          component={() => <div>base</div>}
        />
      </Switch>
    </BaseContainer>
  );
};