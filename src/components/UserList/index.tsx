import React from 'react';

import { Container, Role, User, Avatar } from './styles';

import users from '../../assets/data/users';

interface UserProps {
  nickname: string;
  isBot?: boolean;
  ImageUrl: any;
}


const UserRow: React.FC<UserProps> = ({ nickname, isBot, ImageUrl }) => {
  return (
    <User>
      <Avatar ImageUrl={ImageUrl} className={isBot ? 'bot' : ''} />
      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - {users.online.length}</Role>
      {users.online.map(user => (
        <UserRow 
          key={user.nickname}
          nickname={user.nickname}
          isBot={user.isBot}
          ImageUrl={user.ImageUrl}
        />
      ))}


      {/* <Role>Offline - 18</Role>
      <UserRow nickname="Rei das webnamoradas" />
      <UserRow nickname="Vythor" />
      <UserRow nickname="Talarico" isBot/>
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" /> */}
    </Container>
  )
}

export default UserList;