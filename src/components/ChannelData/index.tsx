import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

import chatMessages from '../../assets/data/chat';
import users from '../../assets/data/users';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messagesRef.current

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        {chatMessages.map((message, index) => (
          <ChannelMessage
            key={index} 
            author={message.author.nickname}
            date="17/06/2020"
            content={message.content}
            ImageUrl={message.author.ImageUrl}
          />
        ))}

        {/* <ChannelMessage 
          author={users.online[3].nickname}
          date="25/06/2020"
          hasMention
          ImageUrl={users.online[3].ImageUrl}
          content={
            <>
              Oi <Mention>@Bumbum Guloso</Mention> Pera ai João Gostoso
            </>
          }
          />

        <ChannelMessage 
          author={users.online[1].nickname}
          date="26/06/2020"
          ImageUrl={users.online[1].ImageUrl}
          content={
            <>
              Oi <Mention>@Rei das webnamoradas</Mention> como vai a nossa namorada?
            </>
          }
        /> */}

      </Messages>

      <InputWrapper>
        <Input placeholder="Conversar em #webnamoro" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData;