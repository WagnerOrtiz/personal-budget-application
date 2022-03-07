import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

export const TransactionsContext = createContext<TransactionProps[]>([])

interface TransactionProps{
  id: number,
  item: string,
  amount: number,
  category: string,
  type: string,
  date:string,
}

interface TransactionsProviderProps{
  children: ReactNode,
}

export const TransactionsProvider = ({children}:TransactionsProviderProps) => {
  const [transactions , setTransactions] = useState<TransactionProps[]>([])

  useEffect(() => {
    api.get('/transactions')
    .then(response => setTransactions(response.data.transactions ))
  }, [])


  return(
    <TransactionsContext.Provider value={transactions}>
        {children}
    </TransactionsContext.Provider>
  )
}