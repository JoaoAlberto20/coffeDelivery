import styled from 'styled-components'

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
  margin-top: 2rem;

  & > label {
    width: 12.5rem;
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
