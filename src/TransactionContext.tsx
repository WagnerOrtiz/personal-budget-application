import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface TransactionsContexProps{
  transactions: Transaction[],
  createNewTransaction: (newTransaction:NewTransactionProps) => Promise<void>,
}
interface Transaction{
  id: number,
  item: string,
  amount: string,
  category: string,
  type: string,
  date:string,
}

type NewTransactionProps = Omit<Transaction, 'id' | 'date'>

interface TransactionsProviderProps{
  children: ReactNode,
}

export const TransactionsContext = createContext({} as TransactionsContexProps)

export const TransactionsProvider = ({children}:TransactionsProviderProps) => {
  const [transactions , setTransactions] = useState<Transaction[]>([])
  const createNewTransaction = async(newTransaction:NewTransactionProps) => {
    const response = await api.post('/transactions', {
      ...newTransaction,
      date: new Date()
    })
    const transactionResponded = response.data.transaction

    setTransactions([...transactions, transactionResponded])
    console.log(transactions)

  }

  useEffect(() => {
    api.get('/transactions')
    .then(response => setTransactions(response.data.transactions ))
  }, [])

  return(
    <TransactionsContext.Provider value={{transactions, createNewTransaction}}>
        {children}
    </TransactionsContext.Provider>
  )
}