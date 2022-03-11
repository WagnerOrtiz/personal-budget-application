import { Container, TableWrapper } from './style'
import { TransactionItem } from '../TransactionItem'
import { TableHeader } from '../TableHeader'
import { useContext } from 'react'
import { TransactionsContext } from '../../TransactionContext'

export const Table = () => {
  const {transactions} = useContext(TransactionsContext)

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
        {transactions.map(transactions => (
          <TransactionItem key={transactions.id}
            item={transactions.item}
            amount={new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(Number(transactions.amount))}
            category={transactions.category}
            date={new Intl.DateTimeFormat('pt-BR').format(
             new Date(transactions.date)
            )}
            type={transactions.type}
          />
        )
        )}
      </tbody>
    </TableWrapper>
  </Container>
)}