import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  
  justify-content: center;

  color: #333;

  background-color: #fff;

  padding: 20px 40px;
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
    color: #f6f6f6;
    font-size: 20px;
  }

`;

export const Image = styled.img``;
