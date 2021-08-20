import React from "react";
import { Box, Text } from "grommet";
import socket from "io";

import { Cell, GameI } from "interfaces";

import { GameMap } from "./GameMap";

export class Game extends React.Component {
  state = {
    metrics: {} as any,
    map: [] as Cell[][],
  };

  componentDidMount() {
    socket.get().on("update_game", (data: GameI) => {
      this.setState({ map: data.map });
    });
  }

  render() {
    const { map } = this.state;

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
          <GameMap map={map} tileSize={64} />
        </Box>
      </Box>
    );
  }
}

