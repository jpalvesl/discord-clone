import React from 'react';

import { Container, HashTagIcon, VolumeUpIcon, InviteIcon, SettingsIcon } from './styles';

export interface Props {
  channelName: string;
  selected?: boolean;
  isVoice?: boolean;
}

const ChannelButton: React.FC<Props> = ({
  channelName,
  selected,
  isVoice
}) => {
  return (
    <Container className={selected? 'active' : ''}>
      <div>
        {isVoice ? <VolumeUpIcon /> : <HashTagIcon />}
        <span>{channelName}</span>
      </div>

      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  )
}

export default ChannelButton;