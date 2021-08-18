import React from "react";
import { Box, Text } from "grommet";

import { Cell } from "interfaces";

interface GameMapProps {
  cell: Cell;
  position: CellPosition;
}

interface CellPosition {
  x: number;
  y: number;
}

export class GameCell extends React.Component<GameMapProps> {
  render() {
    const { cell } = this.props;

    if (!cell.type) {
      return null;
    }

    return (
      <Box direction='row'>

      </Box>
    );
  }
}
