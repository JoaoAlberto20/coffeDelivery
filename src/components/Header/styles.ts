import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.5rem;
`

export const ContainerNav = styled.nav`
  display: flex;
  gap: 0.75rem;

  a {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    padding: 0.5rem;
    gap: 0.25rem;
    border-radius: 6px;
  }
`

export const ContainerLinkMap = styled(NavLink)`
  background: ${(props) => props.theme['purple-light']};
  > svg {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const ContainerLinkCart = styled(NavLink)`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  &:first-child {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
