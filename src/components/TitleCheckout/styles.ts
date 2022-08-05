import styled from 'styled-components'

export const ContainerTitle = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  > div {
    h4 {
      line-height: 130%;
      font-weight: 400;
      font-size: 1rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 130%;
    }
  }
`
