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

export const ContentImageHeader = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 480px;

    @media (max-width: 768px) {
      height: 390px;
    }

    @media (max-width: 576px) {
      height: 270px;
    }

    @media (max-width: 450px) {
        height: 200px;
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
