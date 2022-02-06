import React from "react";
import styled from "styled-components";
import { Button } from "../../../../../ui/Button";

import { BIOM_TYPE, Cell } from "interfaces";

interface GameMapProps {
  cell: Cell;
  position: CellPosition;
  tileSize: number;
  onClick: (x: number, y: number) => void;
}

interface CellPosition {
  x: number;
  y: number;
}

export class GameCell extends React.Component<GameMapProps> {
  render() {
    const { cell, position, tileSize, onClick } = this.props;
    const { x, y } = position;
    const { type, readyToSet } = cell;

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
        readyToSet={readyToSet}
        onClick={() => onClick(x, y)}
      >
        {/*{x}, {y}*/}
      </CellWrap>
    );
  }
}

const CellWrap = styled.div<{ type: any; readyToSet: boolean }>`
  position: absolute;
  border: ${props =>  {
    return props.type === 'empty' ? '1px ' : '0px'
}} solid #dedede;
  background-image: ${(props: any) => getTileTexture(props)};
  box-sizing: border-box;
  background-color: ${(props: any) => props.readyToSet ? 'rgba(63,63,63, 0.7)' : ''};
`;

function getTileTexture(props: { type: BIOM_TYPE }) {
  return `url(/static/images/tiles/${props.type}.png)`;
}
