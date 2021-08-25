import React from "react";
import { Box } from "grommet";
import socket from "io";
import { Cell, GameI } from "interfaces";

import { Game } from "./Game";
import { OptionsBar } from "./OptionsBar";

import "./styles.scss";


export class GamePage extends React.Component {
  state = {
    metrics: {} as any,
    map: [] as Cell[],
  };

  componentDidMount() {
    socket.get().on("update_game", (data: GameI) => {
      this.setState({ map: data.map });
      console.log('update_game', data);
    });
    const options = { mapSizeX: 15, mapSizeY: 10 };
    socket.get().emit("game_create", options as any);
  }

  render() {
    return (
      <Box align="start">
        <Box style={{ border: '1px solid white'}} margin="medium" pad="medium">
          <OptionsBar />
        </Box>
        <Game />
      </Box>
    );
  }
}
