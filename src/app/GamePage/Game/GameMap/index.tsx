import React from 'react';
import { Box, Text } from 'grommet';
import { GameCell } from './GameCell';
import socket from 'io';

import styled from 'styled-components';

import { Cell } from 'interfaces';

interface GameMapProps {
  map: Cell[][];
  tileSize: number;
}

export class GameMap extends React.Component<GameMapProps> {
  clickToMap = (x: number, y: number) => {
    console.log(x, y);
    // socket.get().emit('game_select_cell', { x, y });
  };

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
              <GameCell
                key={`${x}_${y}`}
                cell={cell}
                position={{ x, y }}
                tileSize={tileSize}
                onClick={this.clickToMap}
              />
            ))
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
