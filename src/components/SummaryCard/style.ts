import styled from 'styled-components'

export const Container = styled.div`
  padding: 1rem 2rem;
  border-radius: 0.2rem;
  background-color: var(--white);
  color: var(--title);

  &:last-child{
    background-color: var(--green);
    color: var(--white);
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items:center;
`

export const Title = styled.p`
  font-size: 1rem;
`

export const Icon = styled.img`
`

export const Content = styled.div`
`

export const Value = styled.strong`
  font-size: 2rem;
`

export const Currency = styled.strong`
  font-size: 2rem;  
`
