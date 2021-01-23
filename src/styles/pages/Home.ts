import styled, { css } from 'styled-components';

interface FormProps {
  hasError: boolean;
}

export const Form = styled.form<FormProps>`
  position: relative;
  max-width: 700px;
  width: 100%;

  display: flex;
  align-items: center;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-radius: 50px;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    position: absolute;
    background: transparent;
    border: 0;
    color: #121210;
    cursor: pointer;
    right: 0;
    margin-right: 20px;

    &:focus{
      border: 0;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const BoxAnimeLists = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  padding: 0 24px; 
  
  @media (max-width: 1200px){
    flex-direction: column;
    align-items: center;
  }

`;
