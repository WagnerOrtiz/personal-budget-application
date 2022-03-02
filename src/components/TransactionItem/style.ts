import styled from 'styled-components'

export const Container = styled.tr`
 td:first-child{
   color: #001;
 }
`

export const Item = styled.td`
  background-color: var(--shape);
  color: var(--title);
  padding: 1rem 2rem;
  border-radius: 0.2rem;

  &.spending{
   color:red;
 }

 &.income{
   color:var(--green);
 }
`