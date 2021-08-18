import React from "react";
import { Box } from "grommet";
import { Header } from "./Header";
import { inject, observer } from "mobx-react";
import { FStores } from "stores";

import "./base-containter.scss";

interface FProps {
  children: React.ReactNode;
}

@observer
export class BaseContainer extends React.Component<FProps & FStores> {
  render() {
    const { children } = this.props;
    return (
      <Box className='main'>
        <Header />
        <Box className='main__body'>{children}</Box>
      </Box>
    );
  }
}
