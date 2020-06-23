import React from 'react';

import { Container, Separator } from './styles';

import ServerButton from '../ServerButton';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome selected />

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={12} />
      <ServerButton />
      <ServerButton />

    </Container>  
  )
}

export default ServerList;