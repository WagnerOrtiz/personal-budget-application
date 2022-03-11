import { Container, Item } from './style'

interface TransactionItemProps{
  item: string,
  amount: string,
  category: string,
  date: string,
  type: string,
}


export const TransactionItem = ({item, amount, category, date, type}:TransactionItemProps) => (
  <Container>
    <Item>{item}</Item>
    {
      type==='income' ? ( 
        <Item className={type}>{amount}</Item>
      ) : (
      <Item className={type}>-{amount}</Item>
      )
    }
    <Item>{category}</Item>
    <Item>{date}</Item>
  </Container>

)