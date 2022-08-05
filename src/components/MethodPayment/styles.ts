import styled from 'styled-components'

export const ContainerMethodPayment = styled.div`
  display: grid;
  gap: 0.75rem;
  margin-top: 2rem;

  grid-template-columns: repeat(3, 1fr);

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.75rem;
    height: 3.1875rem;

    text-transform: uppercase;
    font-size: 0.75rem;

    border: 0;
    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;

    cursor: pointer;

    svg {
      color: ${(props) => props.theme['base-purple']};
    }

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme['base-purple']};
    }
  }
`
