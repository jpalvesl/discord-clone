import styled from 'styled-components';
import { Add, ExpandMore } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: CL;

  display: flex;
  flex-direction: column;

  padding: 24px 9.5px 0 16px;
  background-color: var(--secondary);

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 16px;
  margin-bottom: 6px;
  cursor: pointer;

  > span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
    
  }
  
  &:hover {
    > span {
      color: var(--white);
    }
  }
`;

export const ExpandIcon = styled(ExpandMore)`
  width: 14px;
  height: 14px;
  margin-right: 6px;

  color: var(--symbol);
`;

export const AddCategoryIcon = styled(Add)`
  width: 21px;
  height: 21px;
  margin-left: auto;

  color: var(--symbol);

  transition: opacity 200ms;

  &:hover {
    opacity: 0.7;
  }
`;
