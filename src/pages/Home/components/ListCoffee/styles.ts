import styled from 'styled-components'

export const ContainerListCard = styled.div`
  display: flex;
  flex-wrap: wrap;

  /* grid-template-columns: repeat(auto-fit, minmax(256px, 1fr)); */
  margin-top: 3.375rem;
  margin-bottom: 9.8125rem;
  gap: 2rem;

  @media (max-width: 920px) {
    justify-content: center;
  }
`
