import React from 'react';
import { Download, Plus } from 'styled-icons/boxicons-regular';
import { Compass } from 'styled-icons/fa-solid';

import { Container, Separator } from './styles';

import ServerButton from '../ServerButton';

import dataServer from '../../assets/data/servers';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      {dataServer.map((server, index) => (
        <ServerButton 
          key={index}
          hasNotifications={server.hasNotifications}
          mentions={server.mentions}
          iconImage={server.iconImage}
          selected={server.selected}
        />

        
      ))}
      
      <ServerButton>
        <span>YÊ</span>
      </ServerButton>
      
      <ServerButton>
        <span>K's</span>
      </ServerButton>

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