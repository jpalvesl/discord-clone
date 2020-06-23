import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

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
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n} 
            author="João Lima"
            date="15/06/1999"
            content="Mensagens testando o bot"
          />
        ))}

        <ChannelMessage 
          author="Vythor"
          date="15/06/1999"
          hasMention
          content={
            <>
              Oi <Mention>@Bumbum Guloso</Mention> Pera ai João Gostoso
            </>
          }
          />

        <ChannelMessage 
          author="Talarico"
          date="15/06/1999"
          content={
            <>
              Oi <Mention>@Rei das webnamoradas</Mention> como vai a nossa namorada?
            </>
          }
          isBot
        />

      </Messages>

      <InputWrapper>
        <Input placeholder="Conversar em #geral" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData;