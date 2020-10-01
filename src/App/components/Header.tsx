import React from "react";
import { Box } from "grommet";
import { observer, inject } from "mobx-react";
import { NavLink, Link } from "react-router-dom";
// import cx from "classnames";
import { FStores } from "stores";

import "./main-header.scss";

@inject("routing")
@observer
export class Header extends React.Component<FStores> {
  render() {
    const { routing } = this.props;

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
          <div onClick={() => routing.push("/")}>GenomusX</div>
        </Box>
        <NavLink
          className='main__link'
          activeClassName='main__link_active'
          to='/game'
        >
          GAME
        </NavLink>
        <div className='main__link' onClick={() => {
          console.log('Ar');
          routing.push("/armory")
        } }>
          ARMORY
        </div>
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
