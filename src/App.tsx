import { useState } from 'react'
import Modal from 'react-modal'
import { Dashboard } from './components/Dashboard'
import { NewTransactionModal } from '../src/components/NewTansactionModal'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { TransactionsProvider } from './TransactionContext'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  const openNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true)
  }

  const closeNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false)
  }
  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header 
        title="Your Personal Budget" 
        openNewTransactionModal={openNewTransactionModal} 
      />
      <Dashboard />
      
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={closeNewTransactionModal}
      />
    </TransactionsProvider>
  );
}

