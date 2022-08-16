import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
  @media (max-width: 920px) {
    padding: 1rem;
  } ;
`

export const PaymentMethodOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  > p {
    grid-column: span 3;
    color: ${({ theme }) => 'red'};
  }
`

export const HelperText = styled.span`
  font-size: 0.9rem;
  font-weight: 400;
  color: red;
`
