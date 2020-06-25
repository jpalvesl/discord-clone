import React from 'react';

import logo from '../../assets/Logo.svg';

import { Button } from './styles';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  notServer?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
  iconImage?: any;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  notServer,
  hasNotifications,
  mentions,
  iconImage,
  children
}) => {
  return (
    <Button 
      isHome={isHome}
      notServer={notServer}
      hasNotifications={hasNotifications}
      mentions={mentions}
      iconImage={iconImage}
      className={selected ? 'active' : ''}
    >
      {isHome && <img src={logo} alt="Home"/>}
      {isHome || children}
    </Button>
  )
}

export default ServerButton;