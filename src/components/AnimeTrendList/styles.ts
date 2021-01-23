import styled from 'styled-components';

export const Animes = styled.div`
  max-width: 300px;

  display: flex;
  flex-direction: column;
  margin-top: -30px;

  @media (max-width: 1200px){
    margin-top: unset;
    max-width: 800px;
  }

`;