import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;

  align-items: center;

  padding: 0 60px;

  form {
    margin-top: 40px;
  }
  
  @media (max-width: 1200px){
    width: 100%;
    flex-direction: column;

    form {
      margin-top: unset;
    }
  }

`;

export const Logo = styled.img`
  width: 150px;
  height: 150px;
`;