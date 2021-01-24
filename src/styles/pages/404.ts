import styled from "styled-components";

export const Container = styled.div`
  position: absolute;

  display: flex;
  flex: 1;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0, 0.2);

  h1 {
    font-size: 50px;
    line-height: 50px;
    color: #fff;

    text-align: center;
  }
`;

export const Logo = styled.img`
  width: 150px;
  height: 150px;
`;

export const BackgroundImage = styled.div`
  position: static;
`;