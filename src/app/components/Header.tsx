import React from "react";
import { Box } from "grommet";
import { observer, inject } from "mobx-react";
import { NavLink, Link } from "react-router-dom";
// import cx from "classnames";
import { FStores } from "stores";

import "./main-header.scss";

@observer
export class Header extends React.Component<FStores> {
  render() {
    return (
      <Box
        direction='row'
        className={"main__header"}
        height='40px'
        align='center'
      >
        <Box
          direction='row'
          width='auto'
          className='main__logo'
          height='auto'
          margin='0 10px'
        >
          <Link to="/">GenomusX</Link>
        </Box>
        <NavLink
          className='main__link'
          activeClassName='main__link_active'
          to='/game'
        >
          GAME
        </NavLink>
        <NavLink className='main__link' activeClassName='main__link_active' to="/armory">
          ARMORY
        </NavLink>
        <NavLink
          className='main__link'
          activeClassName='main__link_active'
          to='/about'
        >
          ABOUT
        </NavLink>
      </Box>
    );
  }
}
