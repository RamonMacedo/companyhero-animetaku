import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  
  justify-content: center;

  color: #333;

  background-color: #fff;

  padding: 20px 40px;
`;

export const ContainerLoading = styled.div`
  display: flex;
  flex: 1;

  overflow: hidden;

  align-items: center;
  justify-content: center;
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

export const BoxInformation = styled.div`
  border-radius: 5px;
  background-color: #fff;

  margin-top: -20px;

  max-width: 800px;
  width: 100%;

  padding: 10px 0;
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
    color: #181818;
    font-size: 20px;
  }

`;

export const Image = styled.img``;
