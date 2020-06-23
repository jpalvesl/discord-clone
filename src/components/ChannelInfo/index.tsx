import React from 'react';

import { Container, HashTagIcon, Title, Separator, Description } from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashTagIcon />

      <Title>Webnamoro</Title>

      <Separator />

      <Description>Canal aberto</Description>
    </Container>
  )
}

export default ChannelInfo;