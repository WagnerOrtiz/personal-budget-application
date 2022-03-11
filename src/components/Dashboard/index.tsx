import { useContext } from "react";
import { TransactionsContext } from "../../TransactionContext";
import { SummaryCard } from "../SummaryCard";
import { Table } from '../Table';
import { Container, Summary } from "./styles";


export const Dashboard = () => {
  const {transactions} = useContext(TransactionsContext)
  const totalIncome = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'income'){
      return acc+Number(transaction.amount)
    }else{
      return acc
    }
  },0)

  const totalSpendings = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'spending'){
      return acc+Number(transaction.amount)
    }else{
      return acc
    }
  },0)

  const total = totalIncome - totalSpendings


  return(
    <Container>
      <Summary>
        <SummaryCard title="Entradas" amount={totalIncome.toString()}/>
        <SummaryCard title="Saídas" amount={totalSpendings.toString()}/>
        <SummaryCard title="Total" amount={total.toString()} />
      </Summary>
      <Table />
    </Container>
  ) 
}