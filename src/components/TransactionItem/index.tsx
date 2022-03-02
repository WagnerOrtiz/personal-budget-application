import { Container, Item } from './style'

interface TransactionItemProps{
  item: string,
  value: string,
  category: string,
  date: string,
  move: string,
}


export const TransactionItem = ({item, value, category, date, move}:TransactionItemProps) => (
  <Container>
    <Item>{item}</Item>
    <Item className={move}>{value}</Item>
    <Item>{category}</Item>
    <Item>{date}</Item>
  </Container>

)