import React from 'react';
import { Box } from 'grommet';

import { Game } from './Game';
import { OptionsBar } from './OptionsBar';
import { MapStatBar } from './MapStatBar';

import './styles.scss';

export class GamePage extends React.Component {
  // state = {
  //   metrics: {} as any,
  // };

  render() {
    return (
      <Box align="start">
        <Box style={{ border: '1px solid white' }} margin="medium" pad="medium" direction="row" gap="small">
          <OptionsBar />
          {/*<MapStatBar />*/}
        </Box>
        <Game />
      </Box>
    );
  }
}
