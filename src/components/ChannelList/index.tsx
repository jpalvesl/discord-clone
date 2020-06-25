import React from 'react';

import { Container, Category, ExpandIcon, AddCategoryIcon } from './styles';

import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <ExpandIcon />
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="geral" selected />
      <ChannelButton channelName="music" />
      <ChannelButton channelName="projeto" />
      <ChannelButton channelName="cineminha" />

      <Category>
        <ExpandIcon />
        <span>Canais de voz</span>
        <AddCategoryIcon /> 
      </Category>

      <ChannelButton channelName="Geral" isVoice />
      <ChannelButton channelName="Webnamoro" isVoice />
      <ChannelButton channelName="Cinema" isVoice />
      <ChannelButton channelName="Jogando" isVoice />
      <ChannelButton channelName="Projeto" isVoice />

      <Category>
        <span>AFK</span>
        <AddCategoryIcon /> 
      </Category>

      <ChannelButton channelName="Afk + 15min" isVoice />
    </Container>
  )
}

export default ChannelList;