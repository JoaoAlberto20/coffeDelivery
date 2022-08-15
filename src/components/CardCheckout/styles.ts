import styled from 'styled-components'

export const ContainerCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.25rem;
  position: relative;
`

export const ContainerButtonImageTitle = styled.div`
  display: flex;
  gap: 1.25rem;

  > div {
    display: flex;
    gap: 0.25rem;
    flex-direction: column;
  }

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const ContainerButtonPlusMinRemove = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 72px 91px;

  button {
    padding: 0.5rem;
    height: 2rem;
    display: flex;
    gap: 0.25rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    border: 0;
    background: ${(props) => props.theme['base-button']};
    font-size: 0.75rem;
    padding: 8px;

    svg {
      color: ${(props) => props.theme['base-purple']};
    }
  }

  span {
    color: ${(props) => props.theme['base-text']};
    line-height: 130%;
    font-size: 16px;
  }
`
export const ContainerAddCart = styled.div`
  display: grid;
  grid-template-columns: 71px 91px;
  gap: 0.5rem;
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
  text-transform: uppercase;
  display: flex;
  gap: 0.25rem;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};

  svg {
    color: ${(props) => props.theme['base-purple']};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`
