import styled from 'styled-components'

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`

interface ErrosTypes {
  isError: true | false
}

export const TextInput = styled.input<ErrosTypes>`
  padding: 0.75rem;
  height: 2.625rem;
  background: ${(props) => props.theme['base-input']};
  border: 0;
  border-radius: 4px;
  font-size: 0.875rem;
  outline: none;

  border: 1px solid ${({ theme, isError }) => (isError ? 'none' : 'red')};

  &:placeholder-shown {
    color: ${(props) => props.theme['base-label']};
  }

  &:not(:placeholder-shown) {
    color: ${(props) => props.theme['base-text']};
    border: 1px solid ${({ theme, isError }) => theme['yellow-dark']};
  }

  &:focus {
    border: 1px solid ${({ theme, isError }) => theme['yellow-dark']};
  }
`

export const HelperText = styled.span`
  font-size: 0.9rem;
  font-weight: 400;
  color: red;
`
