import { Container, Header, Title, Icon, Content, Currency, Value } from './style'
import income from '../../assets/entradas.svg'
import spendings from '../../assets/saidas.svg'
import total from '../../assets/total.svg'

interface SummaryCardProps {
  title: string,
  value: string,
}

export const SummaryCard = ({title, value}:SummaryCardProps) => (
  <Container>
    <Header>
      <Title>{title}</Title>
      {
        title==="Entradas" && (<Icon src={income} alt="Entradas" />)
      }
      {
        title==="Saídas" && (<Icon src={spendings} alt="Saídas" />)
      }
      {
        title==="Total" && (<Icon src={total} alt="Total" />)
      }
    </Header>
    <Content>
      <Currency>R$</Currency>
      <Value>{value}</Value>
    </Content>
  </Container>
)