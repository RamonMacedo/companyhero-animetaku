import styled, { keyframes } from 'styled-components';

export const ContainerLoading = styled.div`
  display: flex;
  flex: 1;

  overflow: hidden;

  align-items: center;
  justify-content: center;
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
  overflow: hidden;

  flex: 1;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  height: 100vh;

  animation: ${ apperFromRight } 1s;

  h1 {
    margin-top: 20px;
    color: #181818;
    font-size: 20px;
  }

`;

export const Image = styled.img``;
