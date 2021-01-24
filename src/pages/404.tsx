import { Container, BackgroundImage, Logo } from '../styles/pages/404';
import { Typography, Button } from 'antd';

const { Title,  } = Typography;

export default function NotFound(){
  return (
    <>
      <Container>
        <Logo src="https://i.ibb.co/3Tt063w/animetaku-logo2.png" />
        <Title>
          404 | Page not Found!
        </Title>
        <Button href="/">Back to home</Button>
      </Container>
      <BackgroundImage style={{height: '100vh', backgroundImage: 'url(https://i.pinimg.com/originals/7d/0d/70/7d0d70f8a020ce631162f8424223fed9.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} />    
    </>
  )
}