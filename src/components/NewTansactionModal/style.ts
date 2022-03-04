import styled from 'styled-components'

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
    height: 2.4rem;
    color: var(--title);
    border: 0.5px solid lightgray;
    border-radius: 0.2rem;
    &:hover{

    }
  }

  button[type="submit"]{
    background-color: var(--blue);
    color: var(--shape);
    height: 3rem;
    margin-top: 1rem;
  }

  button[class="income"]{
    height: 3rem;
    margin-right: 1rem;
    &:active{
      background-color: black;
    }
  }

  button[class="spending"]{
    height: 3rem;
    &:active{
      background-color: black;
    }
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const CloseContainer = styled.button`
`
export const Icon = styled.img`
`