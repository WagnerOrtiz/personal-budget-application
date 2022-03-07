import { Container, TableWrapper } from './style'
import { TransactionItem } from '../TransactionItem'
import { TableHeader } from '../TableHeader'
import { useEffect, useState } from 'react'
import {api} from '../../services/api'

interface transactionProps{
  id: number,
  item: string,
  amount: number,
  category: string,
  type: string,
  date:string,
}

export const Table = () => {
  const [transaction , setTransaction] = useState<transactionProps[]>([])

  useEffect(() => {
    api.get('/transactions')
    .then(response => setTransaction(response.data.transactions ))
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
        {transaction.map(transaction => (
          <TransactionItem key={transaction.id}
            item={transaction.item}
            amount={new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(transaction.amount)}
            category={transaction.category}
            date={new Intl.DateTimeFormat('pt-BR').format(
              new Date(transaction.date)
            )}
            type={transaction.type}
          />
        )
        )}
      </tbody>
    </TableWrapper>
  </Container>
)}