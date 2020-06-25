import React from 'react';

import { Container, HashTagIcon, Title, Separator, Description, ToolBar, BellIcon, PinIcon, GroupIcon, Input, InboxIcon, QuestionIcon } from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashTagIcon />

      <Title>geral</Title>

      <Separator />

      <Description>Canal aberto</Description>

      <ToolBar>
        <BellIcon />
        <PinIcon />
        <GroupIcon />

        <Input placeholder="Buscar" />

        <InboxIcon />
        <QuestionIcon />
      </ToolBar>
    </Container>
  )
}

export default ChannelInfo;