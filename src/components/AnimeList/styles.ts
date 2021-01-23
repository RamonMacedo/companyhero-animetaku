import styled from 'styled-components';

export const Animes = styled.div`
  max-width: 800px;

  display: flex;
  flex: 1;
  flex-direction: column;
  align-self: center;
  justify-self: center;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    div {
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
        word-break: break-all;
      }

      p {
        font-size: 16px;
        color: #a8a8b3;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const AvatarSide = styled.div`
  display: flex;
  flex: 1;

  max-width: 100px;

  > div {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    height: 280px;

    @media (max-width: 768px) {
      height: 293px;
    }
    
    @media (max-width: 576px) {
        height: 369px;
    }

    @media (max-width: 490px) {
        height: 425px;
    }

    @media (max-width: 380px) {
        height: 448px;
    }
  }

  

  

  
`;

export const CardTitle = styled.div`
  display: flex;

  align-items: center;

  > h4 {
    margin: 0;
    padding: 0;
  }
  
  small {
    margin-left: 8px;
    line-height: 1.4;
  }
`;