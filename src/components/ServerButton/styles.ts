import styled from 'styled-components';

import { Props } from '.';

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;
  border-radius: 50%;

  margin-bottom: 8px;

  background-color: ${props => props.isHome ? 'var(--discord)' : 'var(--primary)'};
  background-image: url(${props =>  props.iconImage}); 
  background-size: 48px;
  background-repeat: no-repeat;
  background-position: center;
  
  cursor: pointer;
  position: relative;

  > img {
    height: 32px;
    width: 32px;
  }

  font-size: 18px;
  color: ${props => props.notServer ? 'var(--symbol)' : 'var(--white)'};

  
  &::before {
    content: '';
    width: 9px;
    height: 0px;
    height: ${props => props.hasNotifications && '9px'};
    max-height: 40px;

    position: absolute;
    left: -17px;
    top: calc(50% -4.5px);
    background-color: var(--white);
    border-radius: 50%;

    display: inline-block;
    transition: all 300ms;
  }

  &::after {
    content: '${props => props.mentions}';
    display: ${props => props.mentions && props.mentions > 0 ? 'inline' : 'none'};
    background-color: var(--notification);
    width: auto;
    height: 16px;

    padding: 0 4px;

    position: absolute;
    bottom: -4px;
    right: -4px;

    border-radius: 12px;
    border: 4px solid var(--quaternary); 

    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);
  }

  transition: border-radius .2s, background-color .2s;

  &.active,
  &:hover {
    border-radius: 16px;
    background-color: ${props => props.notServer ? 'var(--server-selected)' : 'var(--discord)'};
  }
  
  &:hover {
    &::before {
      height: 18px;
      border-radius: 30%;
      display: inline-block;
    }
  }
  
  &.active {
    &::before {
      height: 100%;
      border-radius: 30%;
      display: inline-block;
    }
  }
`;
