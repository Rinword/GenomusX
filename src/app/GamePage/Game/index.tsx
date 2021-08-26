import React from "react";
import { Box, Text } from "grommet";
import socket from "io";

import { Cell, GameI } from "interfaces";

import { GameMap } from "./GameMap";

export class Game extends React.Component {
  state = {
    game: {
      map: {
        grid: [] as Cell[][]
      },
      createOption: {}
    },
  };

  componentDidMount() {
    socket.get().on("update_game", (data: GameI) => {
      this.setState({ game: data });
    });
  }

  render() {
    const { game } = this.state;

    // if (!map.length) {
    //   return (
    //     <Box>
    //       <Text>Игра не проинициализирована</Text>
    //     </Box>
    //   );
    // }

    return (
      <Box direction='row'>
        <Box>
          <GameMap map={game.map.grid} tileSize={64} />
        </Box>
      </Box>
    );
  }
}

