import React from 'react';
import { Download, Plus } from 'styled-icons/boxicons-regular';
import { Compass } from 'styled-icons/fa-solid';

import { Container, Separator } from './styles';

import ServerButton from '../ServerButton';

const dataServer = [
  {
    children: <span>YU</span>,
    hasNotifications: true,
    mentions: 2
  }
]

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome selected />

      <Separator />

      {dataServer.map(server => (
        <ServerButton 
          hasNotifications={server.hasNotifications}
          mentions={server.mentions}
        >
          {server.children}
        </ServerButton>
      ))}
      
      <ServerButton notServer>
        <Plus size={32} />
      </ServerButton>
      <ServerButton notServer>
        <Compass size={24} />
      </ServerButton>

      <Separator />
      <ServerButton notServer>
        <Download size={24} />
      </ServerButton>


    </Container>  
  )
}

export default ServerList;