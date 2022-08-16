import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
  @media (max-width: 920px) {
    padding: 1rem;
  } ;
`
