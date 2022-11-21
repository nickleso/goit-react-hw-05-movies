import styled from 'styled-components';

export const StyledButton = styled.button`
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
    background-color: #f1f4f7;
    cursor: pointer;
  }
`;

export const StyledInput = styled.input`
  border: 1px solid #1a7ac8;
  border-color: #1a7ac8;
  border-radius: 5px;
  width: 200px;
  height: 36px;

  color: #1a7ac8;

  &:hover {
    background-color: #f1f4f7;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  gap: 40px;
`;
