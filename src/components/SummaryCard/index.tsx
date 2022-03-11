import income from '../../assets/entradas.svg'
import spendings from '../../assets/saidas.svg'
import total from '../../assets/total.svg'
import { Container, Content, Currency, Header, Icon, Title, Value } from './style'

interface SummaryCardProps {
  title: string,
  amount: string,
}

export const SummaryCard = ({title, amount}:SummaryCardProps) => {
  return(
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

    {
      title==='Saídas' ? (
        <Content>
          <Currency className='spendingSummary'>-R$</Currency>
          <Value className='spendingSummary'>{amount}</Value>
        </Content>
      ) : (
        <Content>
          <Currency>R$</Currency>
          <Value>{amount}</Value>
        </Content>
      )
    }    
  </Container>
)}