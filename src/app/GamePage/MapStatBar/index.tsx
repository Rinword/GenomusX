import React from 'react';
import { Box, Text } from 'grommet';
import { Button } from 'ui';
import socket from 'io';

import {BIOM_TYPE, GameI} from 'interfaces';
import { CellWrap } from '../OptionsBar';

const bioms: BIOM_TYPE[] = ['mountain', 'forest', 'hills', 'plain', 'swamp'];

interface MapStatBarOptions {
  mapSizeX: number;
  mapSizeY: number;
  _cellsCount: number;
  proportions: Record<BIOM_TYPE, number>;
  normalizedPercents: Record<BIOM_TYPE, number>;
  finalCellsCount: Record<BIOM_TYPE, number>;
}

export class MapStatBar extends React.Component<any, any> {
  state = {
    game: {
      map: {
        tempData: {
          emptyCellsCount: 0,
        }
      }
    } as GameI,

  };

  iterateMap() {
    socket.get().emit('game_iterate_map');
  }

  componentDidMount() {
    socket.get().on("update_game", (data: GameI) => {
      console.log('update_game', data);
      this.setState({ game: data });
    });
  }

  render() {
    const { tempData } = this.state.game.map;
    const { emptyCellsCount } = tempData;

    if(!tempData._allCellsCount) {
      return null;
    }

    return (
      <Box margin={{ bottom: 'small' }} gap="small">
        <Box direction="row" gap="small" >
          <Text>Осталось разместить:</Text>
          <Text weight="bold">{emptyCellsCount}</Text>
        </Box>
        <Box gap="small" margin={{  top:'18px' }}>
          <Text>Распределение биомов</Text>
          {bioms.map(type => <BiomStat key={type} type={type} tempData={tempData} />)}
        </Box>
        <Button onClick={this.iterateMap}>Запустить генерацию</Button>
      </Box>
    );
  }
}

const BiomStat = (props: BiomStatType) => {
  const { type, tempData } = props;
  const { remain, currentProportionsCount } = tempData;

  return <Box direction="row" gap="small">
    <CellWrap type={type} />
    <Text style={{ width: '40px'}}>{remain[type]}</Text>
    <Text style={{ width: '40px'}}>{(currentProportionsCount[type] * 100).toFixed(2)}%</Text>
  </Box>
}

interface BiomStatType {
  type: BIOM_TYPE;
  tempData: any;
}