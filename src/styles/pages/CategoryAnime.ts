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

const apperFromRight = keyframes`
  from{
    opacity: 0;
    transform: translateX(50px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationLoadingContainer = styled.div`
  display: flex;

  flex: 1;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  height: 100vh;

  animation: ${ apperFromRight } 1s;

  h1 {
    margin-top: 20px;
    color: #f6f6f6;
    font-size: 20px;
  }

`;

export const Image = styled.img``;
