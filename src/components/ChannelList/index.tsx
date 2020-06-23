import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';

import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="geral" />
      <ChannelButton channelName="webnamoro" />
      <ChannelButton channelName="projeto" />
      <ChannelButton channelName="cineminha" />
    </Container>
  )
}

export default ChannelList;