import Modal from 'react-modal'
import { Container, ButtonContainer, Icon, CloseContainer} from './style'
import income from '../../assets/entradas.svg'
import spendings from '../../assets/saidas.svg'
import close from '../../assets/fechar.svg'

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
    <Container>
      <h2>Cadastrar Transação</h2>
      <CloseContainer>
        <Icon className='close-button' src={close} alt="Entradas" />
      </CloseContainer>

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