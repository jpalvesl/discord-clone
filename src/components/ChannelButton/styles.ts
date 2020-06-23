import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings, VolumeUp } from 'styled-icons/material';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  padding: 5px 3px;
  margin-bottom: 3px;
  border-radius: 5px;

  background-color: transparent;

  transition: background-color 200ms;

  > div {
    display: flex;
    align-items: center;

    span {
      margin-left: 5px;
      font-size: 15px;
      color: var(--senary);
    }
  }

  div + div {
    z-index: -1;
  }

  &:hover, 
  &.active {
    background-color: var(--quinary);
    
    > div span {
      color: var(--white);
    }

    div + div {
      z-index: 0;
    }
  }
`;

export const HashTagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;

  color: var(--symbol);
`;

export const VolumeUpIcon = styled(VolumeUp)`
  width: 20px;
  height: 20px;

  color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;
  margin-right: 4px;

  color: var(--symbol);
  cursor: pointer;

  transition: color 200ms;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 16px;
  height: 16px;

  color: var(--symbol);
  cursor: pointer;

  transition: color 200ms;

  &:hover {
    color: var(--white);
  }
`;

