import logo  from '../../assets/logo.svg'
import { Button, Container, Image, Logo, Content } from './style'


interface HeaderProps{
  title: string,
  openNewTransactionModal: () => void,
}

export const Header = ({title, openNewTransactionModal}: HeaderProps) => {
  return(
  <Container>
    <Content>
      <Logo className="logo">
        <Image src={logo} alt="personal-budget" />
        <h3>{title}</h3>
      </Logo>
      <Button onClick={openNewTransactionModal}>Nova transação</Button>
    </Content>
  </Container>
)
}