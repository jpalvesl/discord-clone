import React from 'react';

import { Container, Role, User, Avatar } from './styles';

import users from '../../assets/data/users';
import { generateColor } from '../../utils/generateColor';

interface UserProps {
  nickname: string;
  isBot?: boolean;
  offline?: boolean;
  ImageUrl?: any;
  color?: any;
}


const UserRow: React.FC<UserProps> = ({ 
  nickname, 
  isBot, 
  offline,
  ImageUrl, 
  color 
}) => {
  return (
    <User offline={offline}>
      <Avatar color={color} ImageUrl={ImageUrl} className={isBot ? 'bot' : ''} />
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
          color={generateColor()}
        />
      ))}


      <Role>Offline - {users.offline.length}</Role>
        {users.offline.map((user, index) => (
          <UserRow
            key={index} 
            nickname="John Doe" 
            color={generateColor()} 
            offline
          />

        ))}
    </Container>
  )
}

export default UserList;