import React from "react";
import { Box, Text } from "grommet";

import { Cell } from "interfaces";

interface GameMapProps {
  map: Cell[][];
  tileSize: string;
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
        <Box width={`${map.length * +tileSize}` } height={`${map[0].length * +tileSize}` }>
          <GameMap map={map} tileSize={tileSize} />
        </Box>
      </Box>
    );
  }
}
