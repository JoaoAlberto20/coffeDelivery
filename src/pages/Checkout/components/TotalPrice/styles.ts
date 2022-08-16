import styled from 'styled-components'

export const ContainerPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.5rem;
`

export const ContainerTotalItens = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ContainerDelivery = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 0.875rem;
    line-height: 130%;
  }
`
export const ContainerTotalPrice = styled.div`
  display: flex;
  justify-content: space-between;

  h3,
  span {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
  }
`
