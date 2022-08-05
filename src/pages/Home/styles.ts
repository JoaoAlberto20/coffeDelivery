import styled from 'styled-components'

export const ContainerHome = styled.main`
  display: flex;
  flex-direction: column;
`

export const ContainerListCoffee = styled.section`
  padding-top: 2rem;

  > h2 {
    font-size: 2rem;
    line-height: 130%;
    font-weight: 800;
    font-family: 'Baloo 2', cursive;
  }
`

export const ContainerListCard = styled.div`
  display: flex;
  flex-wrap: wrap;

  /* grid-template-columns: repeat(auto-fit, minmax(256px, 1fr)); */
  margin-top: 3.375rem;
  margin-bottom: 9.8125rem;
  gap: 2rem;
`
