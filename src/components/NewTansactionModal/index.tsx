import Modal from 'react-modal'
import income from '../../assets/entradas.svg'
import close from '../../assets/fechar.svg'
import spendings from '../../assets/saidas.svg'
import { ButtonContainer, CloseContainer, Container, Icon } from './style'

interface NewTransactionModalProps{
  isOpen: boolean,
  onRequestClose: () => void,
}

export const NewTransactionModal = ({isOpen,onRequestClose}:NewTransactionModalProps) => (

  <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="overlay-modal"
    className="content-modal"
  >
    <CloseContainer className='close-button'>
      <Icon src={close} alt="Entradas" />
    </CloseContainer>
    
    <Container>
      <h2>Cadastrar Transação</h2>

      <input placeholder='Item' />
      <input placeholder='Valor' />

      <ButtonContainer>
        <button type='button' className='income'>
          Entrada
          <Icon src={income} alt="Entradas" />
        </button>
        <button type='button' className='spending'>
          Saída
          <Icon src={spendings} alt="Entradas" />
        </button>
      </ButtonContainer>

      <input placeholder='Categoria' />
      <button type="submit">Cadastrar</button>
    </Container>
  </Modal>
)