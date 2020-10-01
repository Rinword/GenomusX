import React from "react";
import { Switch, Route } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { BaseContainer } from "./components/BaseContainer";
import { AboutPage } from "./AboutPage";
import {FStores} from "stores";

@inject('routing')
@observer
export class App extends React.Component<FStores> {
  render() {
    console.log(this.props.routing.location.pathname);
    return (
      <BaseContainer>
        <Switch>
          <Route path={"/game"} component={() => <div>game</div>} />
          <Route exact path={"/armory"} component={() => <div>armory</div>} />
          <Route exact path={"/about"} component={AboutPage} />
          <Route exact path={"/"} component={AboutPage} />
          <Route exact component={() => <div>404: no page for this route</div>} />
        </Switch>
      </BaseContainer>
    );
  }
}
