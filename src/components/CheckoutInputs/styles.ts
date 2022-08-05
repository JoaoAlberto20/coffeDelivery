import styled from 'styled-components'

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`

export const Input = styled.input`
  padding: 0.75rem;
  height: 2.625rem;
  background: ${(props) => props.theme['base-input']};
  border: 0;
  border-radius: 4px;
  font-size: 0.875rem;

  &:placeholder-shown {
    color: ${(props) => props.theme['base-label']};
  }

  &:not(:placeholder-shown) {
    color: ${(props) => props.theme['base-text']};
  }
`

export const ContainerComplementNumber = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 0.75rem;

  div {
    position: relative;

    input {
      width: 100%;
    }

    label {
      position: absolute;
      top: 12px;
      font-style: italic;
      right: 20px;
    }
  }

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`
export const ContainerDistrictCity = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr 60px;
  gap: 0.75rem;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`
