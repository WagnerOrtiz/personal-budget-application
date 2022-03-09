import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

export const TransactionsContext = createContext({} as TransactionsContexProps)
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

export const TransactionsProvider = ({children}:TransactionsProviderProps) => {
  const [transactions , setTransactions] = useState<Transaction[]>([])
  const createNewTransaction = async(newTransaction:NewTransactionProps) => {
    await api.post('/transactions', newTransaction)

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