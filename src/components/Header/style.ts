import styled from 'styled-components'

export const Container = styled.header`
  background-color: var(--blue);
  color: var(--white);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.div`
`

export const Button = styled.button`
  background-color: var(--lightblue);
  color: var(--white);
  height: 3rem;
  padding: 0.2rem 2rem;
  
  border: none;
  border-radius: 0.2rem;
  transition: filter 0.2s;

  cursor: pointer;

  &:hover {
    filter: brightness(0.95);
  }

`

export const Image = styled.img`
  background-color: var(--blue);

`