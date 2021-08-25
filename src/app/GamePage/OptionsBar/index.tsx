import React from 'react';
import { Box, TextInput, Text, RangeInput } from 'grommet';
import _ from 'lodash';
import { Button } from 'ui';
import socket from 'io';

import { BIOM_TYPE } from 'interfaces';
import styled from 'styled-components';

const bioms: BIOM_TYPE[] = ['mountain', 'forest', 'hills', 'plain', 'swamp'];

interface GameCreateOptions {
  mapSizeX: number;
  mapSizeY: number;
  _cellsCount: number;
  proportions: Record<BIOM_TYPE, number>;
  normalizedPercents: Record<BIOM_TYPE, number>;
  finalCellsCount: Record<BIOM_TYPE, number>;
}

export class OptionsBar extends React.Component<any, any> {
  state: GameCreateOptions = {
    mapSizeX: 15,
    mapSizeY: 10,
    _cellsCount: 150,
    proportions: {
      plain: 20,
      hills: 20,
      swamp: 20,
      forest: 20,
      mountain: 20,
    },
    normalizedPercents: {
      plain: 0.2,
      hills: 0.2,
      swamp: 0.2,
      forest: 0.2,
      mountain: 0.2,
    },
    finalCellsCount: {
      plain: 30,
      hills: 30,
      swamp: 30,
      forest: 30,
      mountain: 30,
    }
  };

  sendMapSettings = () => {
    const { mapSizeX, mapSizeY, proportions } = this.state;
    const options = { mapSizeX, mapSizeY };
    console.log(options);
    socket.get().emit('game_create', options as any);
  };

  changeForm = (path?: string, event?: any) => {
    const state = { ...this.state };
    if(path && event) {
      const { value } = event.target;
      _.set(state, path, value);
    }
    const { mapSizeX, mapSizeY, proportions } = state;

    const allCellsCount = mapSizeX * mapSizeY;
    const allProportionsCount = +Object.values(proportions).reduce(
      (sum, nextValue) => +sum + +nextValue,
      0
    );

    const normalizedPercents: Record<BIOM_TYPE, number> = {
      plain: proportions.plain / allProportionsCount,
      hills: proportions.hills / allProportionsCount,
      swamp: proportions.swamp / allProportionsCount,
      forest: proportions.forest / allProportionsCount,
      mountain: proportions.mountain / allProportionsCount,
    };

    const finalCellsCount: Record<BIOM_TYPE, number> = {
      plain: normalizedPercents.plain * allCellsCount,
      hills: normalizedPercents.hills * allCellsCount,
      swamp: normalizedPercents.swamp * allCellsCount,
      forest: normalizedPercents.forest * allCellsCount,
      mountain: normalizedPercents.mountain * allCellsCount,
    };

    state.normalizedPercents = normalizedPercents;
    state.finalCellsCount = finalCellsCount;

    this.setState(state);
  };

  render() {
    const { mapSizeX, mapSizeY, proportions, normalizedPercents, finalCellsCount } = this.state;

    return (
      <Box margin={{ bottom: 'small' }}>
        <Box>
          <Box>
            <Text>Размеры карты, X, Y</Text>
            <Box direction="row" gap="small">
              <TextInput
                size="xsmall"
                placeholder="Xsize"
                value={mapSizeX}
                onChange={event => this.changeForm('mapSizeX', event)}
              />
              <TextInput
                size="xsmall"
                placeholder="Ysize"
                value={mapSizeY}
                onChange={event => this.changeForm('mapSizeY', event)}
              />
            </Box>
          </Box>
          <Box>
            <Text>Доли биомов</Text>
            {bioms.map(type => (
              <Ranger
                key={type}
                name={type}
                value={proportions[type]}
                percent={normalizedPercents[type]}
                cells={finalCellsCount[type]}
                onChange={this.changeForm}
              />
            ))}
          </Box>
          <Button onClick={this.sendMapSettings}>Сгенерировать карту</Button>
        </Box>
      </Box>
    );
  }
}

const Ranger = (props: RangerProps) => {
  const { value, name, onChange, cells, percent } = props;

  return (
    <Box direction="row" gap="small" align="center" margin={{ bottom: 'small' }}>
      <CellWrap type={name} />
      <RangeInput
        style={{ border: '1px solid white', width: '150px' }}
        min={0}
        max={100}
        value={value}
        onChange={event => onChange(`proportions.${name}`, event)}
      />
      <Text style={{ width: '24px', flex: '0 0 auto' }}>{value}</Text>
      <Text>{(percent * 100).toFixed(1)}%</Text>
      <Text>{cells.toFixed(0)}</Text>
    </Box>
  );
};

interface RangerProps {
  value: number;
  name: BIOM_TYPE;
  percent: number;
  cells: number;
  onChange: (value: string, event: any) => void;
}

const CellWrap = styled.div<{ type: BIOM_TYPE }>`
  border: 1px solid white;
  background-image: ${(props: any) => getTileTexture(props)};
  background-size: cover;
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  flex: 0 0 auto;
`;

function getTileTexture(props: { type: BIOM_TYPE }) {
  return `url(/static/images/tiles/${props.type}.png)`;
}
