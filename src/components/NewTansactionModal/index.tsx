import { FormEvent, useState } from 'react'
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
  const [item, setItem] = useState('')
  const [amount, setAmount] = useState<Number>()
  const [category, setCategory] = useState('')

  const handleCreateNewTransaction = (e:FormEvent) => {
    e.preventDefault()
    const data = {
      item: item,
      type: type,
      value: amount,
      category: category,
    }

    console.log(data)
  }


  return(
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="overlay-modal"
      className="content-modal"
    >
      <button 
        className='close-button' 
        onClick={onRequestClose}
      >
        <Icon src={close} alt="Close" />
      </button>
      
      <Container  onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>
  
        <input 
          placeholder='Item'
          value={item} 
          onChange={(e) => setItem(e.target.value)} 
        />
        <input 
          placeholder='Valor' 
          type="number"
          onChange={(e) => setAmount(Number(e.target.value))}
        />
  
        <ButtonContainer>
          <RadioButton 
            type='button'
            onClick={()=>setType('income')} 
            selected={type==='income'} 
            category="income"
          >
            Entrada
            <Icon src={income} alt="Entradas" style={{marginLeft: "1rem"}}/>
          </RadioButton>

          <RadioButton 
            type='button'
            className='spending' 
            onClick={()=>setType('spending')} 
            selected={type==='spending'} 
            category="spending"
          >
            Saída
            <Icon src={spendings} alt="Entradas" style={{marginLeft: "1rem"}} />
          </RadioButton>
        </ButtonContainer>
  
        <input 
          placeholder='Categoria' 
          onChange={(e) => setCategory(e.target.value)} 
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}