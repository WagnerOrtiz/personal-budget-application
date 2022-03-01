import logo  from '../../assets/logo.svg'
import { Button, Container, Image, Logo, Content } from './style'

interface HeaderProps{
  title: string,
}

export const Header = ({title}: HeaderProps) => (
  <Container>
    <Content>
      <Logo className="logo">
        <Image src={logo} alt="personal-budget" />
        <h3>{title}</h3>
      </Logo>
      <Button>Nova transação</Button>
    </Content>
  </Container>
)