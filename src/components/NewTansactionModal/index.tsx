import { useState } from 'react'
import Modal from 'react-modal'
import income from '../../assets/entradas.svg'
import close from '../../assets/fechar.svg'
import spendings from '../../assets/saidas.svg'
import { ButtonContainer, Container, Icon, RadioButton } from './style'

interface NewTransactionModalProps{
  isOpen: boolean,
  onRequestClose: () => void,
}

export const NewTransactionModal = ({isOpen,onRequestClose}:NewTransactionModalProps) => {
  const [type, setType] = useState('income')

  return(
  
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="overlay-modal"
      className="content-modal"
    >
      <button className='close-button' onClick={onRequestClose}>
        <Icon src={close} alt="Entradas" />
      </button>
      
      <Container>
        <h2>Cadastrar Transação</h2>
  
        <input placeholder='Item' />
        <input placeholder='Valor' />
  
        <ButtonContainer>
          <RadioButton onClick={()=>setType('income')} selected={type==='income'} category="income">
            Entrada
            <Icon src={income} alt="Entradas" style={{marginLeft: "1rem"}}/>
          </RadioButton>

          <RadioButton className='spending' onClick={()=>setType('spending')} selected={type==='spending'} category="spending">
            Saída
            <Icon src={spendings} alt="Entradas" style={{marginLeft: "1rem"}} />
          </RadioButton>
        </ButtonContainer>
  
        <input placeholder='Categoria' />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}