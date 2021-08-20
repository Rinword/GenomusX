import React from "react";
import { Box, Button } from "grommet";
// import { Button } from 'ui';
import socket from "io";
import { Cell, GameI } from "interfaces";

import { Game } from "./Game";

import "./styles.scss";


export class GamePage extends React.Component {
  state = {
    metrics: {} as any,
    map: [] as Cell[],
  };

  sendMapSettings = () => {
    console.log("send to back options for create game");
    const options = { mapSize: 15 };
    socket.get().emit("game_create", options as any);
  };

  componentDidMount() {
    socket.get().on("update_game", (data: GameI) => {
      this.setState({ map: data.map });
      console.log('update_game', data);
    });
  }

  render() {
    return (
      <Box>
        <Box>setting parameters</Box>
        <Button size='small' onClick={this.sendMapSettings}>
          Сгенерировать карту
        </Button>
        <Game />
      </Box>
    );
  }
}
