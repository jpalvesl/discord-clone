import React from 'react';

import logo from '../../assets/Logo.svg';

import { Button } from './styles';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  notServer?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  notServer,
  hasNotifications,
  mentions,
  children
}) => {
  return (
    <Button 
      isHome={isHome}
      notServer={notServer}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {isHome && <img src={logo} alt="Home"/>}
      {isHome || children}
    </Button>
  )
}

export default ServerButton;