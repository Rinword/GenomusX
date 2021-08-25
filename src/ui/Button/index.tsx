import React from "react";
// import { Button as GButton } from 'grommet';

import "./styles.scss";

export interface FButtonProps {
  className?: string;
  innerIconName?: string;
  onClick?: () => void;
}

export class Button extends React.Component<FButtonProps> {
  renderInnerIcon() {
    return (
      <div
        className={"ux-btn__inner-icon icon icon_" + this.props.innerIconName}
      />
    );
  }

  render() {
    const {
      className = "",
      onClick,
      children,
      innerIconName,
      ...params
    } = this.props;

    return (
      <button className={"ux-btn " + className} onClick={onClick} {...params}>
        {children}
        {innerIconName && this.renderInnerIcon()}
      </button>
    );
  }
}
