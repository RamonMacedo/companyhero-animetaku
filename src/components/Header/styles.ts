import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  padding: 0 60px;

  a {
    text-decoration: none;
    cursor: pointer;
  }
`;

export const Logo = styled.img`
  width: 150px;
  height: 150px;
`;