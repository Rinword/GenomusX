import React from "react";
import styled from "styled-components";

import { BIOM_TYPE, Cell } from "interfaces";

interface GameMapProps {
  cell: Cell;
  position: CellPosition;
  tileSize: number;
}

interface CellPosition {
  x: number;
  y: number;
}

export class GameCell extends React.Component<GameMapProps> {
  render() {
    const { cell, position, tileSize } = this.props;
    const { x, y } = position;
    const { type } = cell;

    if (!cell.type) {
      return null;
    }

    return (
      <CellWrap
        style={{
          width: `${tileSize}px`,
          height: `${tileSize}px`,
          left: `${x * tileSize}px`,
          top: `${y * tileSize}px`,
        }}
        type={type}
      >
      </CellWrap>
    );
  }
}

const CellWrap = styled.div<{ type: BIOM_TYPE }>`
  position: absolute;
  border: 0px solid #dedede;
  background-image: ${(props: any) => getTileTexture(props)};
  box-sizing: border-box;
`;

function getTileTexture(props: { type: BIOM_TYPE }) {
  return `url(/static/images/tiles/${props.type}.png)`;
}
