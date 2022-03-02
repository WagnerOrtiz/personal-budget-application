import { Container, HeaderItem } from './style'

interface TableHeaderProps{
    item: string,
    value: string,
    category: string,
    date: string,
}


export const TableHeader = ({item, value, category, date}:TableHeaderProps) => (
  <Container>
    <HeaderItem>{item}</HeaderItem>
    <HeaderItem>{value}</HeaderItem>
    <HeaderItem>{category}</HeaderItem>
    <HeaderItem>{date}</HeaderItem>
  </Container>
)