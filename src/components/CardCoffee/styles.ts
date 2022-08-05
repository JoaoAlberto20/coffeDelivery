import styled from 'styled-components'

export const ContainerCard = styled.div`
  position: relative;
  padding: 0 1.25rem 1.25rem 1.25rem;
  height: 19.375rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 36px;
  width: 16rem;
`

export const ContainerImagemTag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    position: absolute;
    bottom: 210px;
  }

  > div {
    margin-top: 7.25rem;
    display: flex;
    gap: 0.25rem;

    span {
      text-transform: uppercase;
      padding: 0.25rem 0.5rem;
      font-size: 10px;
      font-weight: 700;
      line-height: 130%;
      color: ${(props) => props.theme['yellow-dark']};
      background: ${(props) => props.theme['yellow-light']};
      border-radius: 100px;
    }
  }
`

export const ContainerTitle = styled.div`
  margin-top: 1rem;
  text-align: center;

  h3 {
    font-size: 1.25rem;
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-label']};
  }
`

export const ContainerPriceCart = styled.div`
  display: flex;
  gap: 1.4375rem;
  margin-top: 2.0625rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 130%;
    font-family: 'Baloo 2', cursive;
    display: block;

    > span {
      font-size: 0.875rem;
      line-height: 130%;
      font-weight: 400;
      font-family: 'Roboto', sans-serif;
      margin-right: 0.25rem;
    }
  }
`

export const ContainerAddCart = styled.div`
  display: flex;
  gap: 0.5rem;
  height: 38px;
`

export const ContainerButtonPLuxMinus = styled.div`
  display: flex;
  align-items: center;
  padding: 0.53125rem 0.5rem;
  gap: 0.5rem;
  background: ${(props) => props.theme['base-button']};
  border-radius: 8px;

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    color: ${(props) => props.theme['base-purple']};
    font-size: px;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  span {
    font-size: 1rem;
  }
`

export const ButtonCart = styled.button`
  border: 0;
  cursor: pointer;
  svg {
    width: 38px;
    height: 38px;
    border-radius: 8px;
    padding: 8px;
    background: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme.white};

    &:hover {
      background: ${(props) => props.theme['base-purple']};
    }
  }
`
