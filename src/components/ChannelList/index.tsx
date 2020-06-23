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
      <ChannelButton channelName="webnamoro" selected />
      <ChannelButton channelName="projeto" />
      <ChannelButton channelName="cineminha" />

      <Category>
        <span>Canais de voz</span>
        <AddCategoryIcon /> 
      </Category>

      <ChannelButton channelName="Geral" isVoice />
      <ChannelButton channelName="Webnamoro" isVoice />
      <ChannelButton channelName="Cinema" isVoice />
      <ChannelButton channelName="Jogando" isVoice />

      <Category>
        <span>AFK</span>
        <AddCategoryIcon /> 
      </Category>

      <ChannelButton channelName="Afk + 15min" isVoice />
    </Container>
  )
}

export default ChannelList;