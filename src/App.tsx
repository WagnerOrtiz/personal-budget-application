import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import Modal from 'react-modal'
import { useState } from 'react'


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
    <>
      <GlobalStyle />
      <Header 
        title="Your Personal Budget" 
        openNewTransactionModal={openNewTransactionModal} 
      />
      <Dashboard />
      
    <Modal 
    isOpen={isNewTransactionModalOpen}
    onRequestClose={closeNewTransactionModal}
    >
      CADASTRAR INFORMAÇÃO
    </Modal>
    </>
  );
}

