import React from "react";
import { Switch, Route } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { BaseContainer } from "./components/BaseContainer";
import { AboutPage } from "./AboutPage";
import { GamePage } from "./GamePage";
import { FStores } from "stores";
import socket from "io";

@inject("routing")
@observer
export class App extends React.Component<FStores> {
  componentDidMount() {
    socket.init();
  }

  render() {
    return (
      <BaseContainer>
        <Switch>
          <Route path={"/game"} component={GamePage} />
          <Route exact path={"/armory"} component={() => <div>armory</div>} />
          <Route exact path={"/about"} component={AboutPage} />
          <Route exact path={"/"} component={AboutPage} />
          <Route exact component={() => <div>404: no page for this route</div>} />
        </Switch>
      </BaseContainer>
    );
  }
}
