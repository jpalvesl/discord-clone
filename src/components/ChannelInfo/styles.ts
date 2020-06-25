import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { Bell, Group } from 'styled-icons/boxicons-solid';
import { Pushpin } from 'styled-icons/remix-fill';
import { Inbox } from 'styled-icons/material';
import { QuestionMarkCircle } from 'styled-icons/heroicons-solid';

export const Container = styled.div`
  grid-area: CI;

  display: flex;
  align-items: center;

  padding-left: 17px;
  background-color: var(--primary);
  box-shadow: rgba(0, 0, 0, .2) 0px 1px 0px 0px;

  z-index: 2;
`;

export const HashTagIcon = styled(Hashtag)`
  width: 24px;
  height: 24px;

  color: var(--symbol);
`;

export const Title = styled.h1`
  margin-left: 8px;
  font-size: 16px;
  font-weight: bold;

  color: var(--white);
`;

export const Separator = styled.div`
  height: 24px;
  width: 1px;

  background-color: var(--white);
  opacity: 0.2;

  margin: 0 13px;
`;

export const Description = styled.span`
  font-size: 15px;
  color: var(--gray);
`;

export const ToolBar = styled.div`
  margin-left: auto;
  min-width: 364px;
  
  svg {
    margin: 0 10px;
    cursor: pointer;

    &:hover {
      color: var(--white);
    }

  }

`;
 
export const BellIcon = styled(Bell)`
  width: 24px;
  height: 24px;

  color: var(--symbol);
`;

export const PinIcon = styled(Pushpin)`
  width: 24px;
  height: 24px;

  color: var(--symbol);
`;

export const GroupIcon = styled(Group)`
  width: 24px;
  height: 24px;

  color: var(--white);
`;

export const Input = styled.input`
  width: 144px;
  height: 24px;

  padding: 0 2px;
  border-radius: 4px;
  background-color: var(--tertiary);
  color: var(--white);
`;

export const InboxIcon = styled(Inbox)`
  width: 24px;
  height: 24px;

  color: var(--symbol);
`;

export const QuestionIcon = styled(QuestionMarkCircle)`
  width: 24px;
  height: 24px;

  color: var(--symbol);
`;
