import styled, { keyframes } from 'styled-components';

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

const apperFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateX(-50px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  animation: ${ apperFromLeft } 1s;
`;
