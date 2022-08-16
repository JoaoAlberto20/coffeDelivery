import styled from 'styled-components'

export const ContainerForm = styled.form`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: 640px 448px;
  gap: 2rem;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  } ;
`

export const ContainerInfo = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  flex: 1;
`

export const ContainerLayout = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
  @media (max-width: 920px) {
    padding: 1rem;
  } ;
`

export const ContainerCart = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const ContainerListProductCheckout = styled.div`
  height: 13rem;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
`

export const ContainerButton = styled.div`
  margin-top: 1.5rem;

  button {
    width: 100%;
    color: ${(props) => props.theme.white};
    font-stretch: 100;
    background: ${(props) => props.theme['base-yellow']};
    height: 46px;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    line-height: 160%;
    border: 0;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.9;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }
`
