import React from "react";
import { Box, Text } from "grommet";
import { GameCell } from "./GameCell";

import styled from "styled-components";

import { Cell } from "interfaces";

interface GameMapProps {
  map: Cell[][];
  tileSize: number;
}

export class GameMap extends React.Component<GameMapProps> {
  render() {
    const { map, tileSize } = this.props;

    if (!map.length) {
      return (
        <Box>
          <Text>карта не проинициализирована</Text>
        </Box>
      );
    }

    return (
      <Box>
        <MapWrap
          width={`${map[0].length * tileSize + 4}px`}
          height={`${map.length * tileSize + 4}px`}
        >
          {map.map((column: Cell[], y) =>
            column.map((cell, x) => (
              <GameCell key={`${x}_${y}`} cell={cell} position={{ x, y }} tileSize={tileSize} />
            )),
          )}
        </MapWrap>
      </Box>
    );
  }
}

const MapWrap = styled(Box)`
  border: 2px solid white;
  position: relative;
`;
