import React from "react";
import { Box } from "grommet";

export class BaseContainer extends React.PureComponent {
  render() {
    const { children } = this.props;
    return <Box style={{ minHeight: "100%" }}>{children}</Box>;
  }
}
