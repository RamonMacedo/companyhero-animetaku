import { Typography, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title } = Typography;

import { Container, Logo } from './styles';

export default function Header({ children }) {
  return (
    <Container>
      <Logo src="https://i.ibb.co/3Tt063w/animetaku-logo2.png" />
      {children}
      <Avatar size={45} icon={<UserOutlined />} />
    </Container>
  )
}