import { Container, TableWrapper } from './style'
import { TransactionItem } from '../TransactionItem'
import { TableHeader } from '../TableHeader'
import { useEffect } from 'react'
import {api} from '../../services/api'

export const Table = () => {
  useEffect(() => {
    api.get('/transactions')
    .then(response => console.log(response.data))
  }, [])

  return(
  <Container>
    <TableWrapper>
      <thead>
        <TableHeader 
          item="Item"
          value="Amount"
          category="Category"
          date="Date"
        />
      </thead>
      <tbody>
        <TransactionItem 
          item="Desenvolvimento de website"
          amount="R$12.000,00"
          category="Venda"
          date="10/01/2022"
          type="income"
        />
        <TransactionItem 
          item="Hamburguer"
          amount="-R$10,00"
          category="Compra"
          date="10/01/2022"
          type="spending"
        />
        <TransactionItem 
          item="Aluguel"
          amount="-R$1.200,00"
          category="Aluguel"
          date="10/01/2022"
          type="spending"
        />
        <TransactionItem 
          item="Compra carro"
          amount="R$25.000,00"
          category="Venda"
          date="10/01/2022"
          type="income"
        />
      </tbody>
    </TableWrapper>
  </Container>
)}