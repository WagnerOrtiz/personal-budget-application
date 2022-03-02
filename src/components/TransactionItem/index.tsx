import { Container, Item } from './style'

interface TransactionItemProps{
  item: string,
  value: string,
  category: string,
  date: string,
  type: string,
}


export const TransactionItem = ({item, value, category, date, type}:TransactionItemProps) => (
  <Container>
    <Item>{item}</Item>
    <Item className={type}>{value}</Item>
    <Item>{category}</Item>
    <Item>{date}</Item>
  </Container>

)