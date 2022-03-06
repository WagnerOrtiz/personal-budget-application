import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  h2{
    color: var(--title);
    margin-bottom: 1rem
  }

  input{
    background-color: var(--background);
    padding: 1rem;
    border: 0.5px solid lightgray;
    border-radius: 0.2rem;
    margin: 1rem 0;

    &+input{
      margin-top: 0;
    }
    &:focus{
      outline:  1px solid lightgray;
    }
    &::placeholder{
    color: var(--title);
    }
  }

  button{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: var(--title);
    border-radius: 0.2rem;
    &:hover{
    }
  }

  button[type="submit"]{
    background-color: var(--blue);
    color: var(--white);
    height: 3rem;
    margin-top: 1rem;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 3rem;
`

interface RadioButtonProps{
  selected:boolean,
  category: string,
}
export const RadioButton = styled.button<RadioButtonProps>`
  background-color: var(--white);
  border: ${(props) => { 
    if(props.selected && props.category ==='income'){ 
      return('0.5px solid #00FF7F')
    }
    else if(props.selected && props.category ==='spending'){ 
      return('0.5px solid #FA8072')
    }else{
      return('0.5px solid lightgray');
    }
  }};
  &+button{
    margin-left: 1rem;
  }
`

export const Icon = styled.img`
`


export const ErrorMessage = styled.div`
  color: var(--red);
`