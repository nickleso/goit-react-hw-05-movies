import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledDiv = styled.div`
  padding: 16px;
  display: flex;
  gap: 10px;
  box-shadow: 0px 4px 10px 4px #9e9e9e;
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid blue;
  border-color: #1a7ac8;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  color: #1a7ac8;

  &:hover {
    color: #fff;
    background-color: #058bf8;
  }
`;

export const StyledLink = styled(Link)`
  color: #1a7ac8;

  &:hover {
    color: #fff;
    background-color: #058bf8;
  }
`;
