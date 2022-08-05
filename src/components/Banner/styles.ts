import styled from 'styled-components'

export const ContainerBanner = styled.section`
  display: flex;
  padding: 5.875rem 0 6.75rem 0;
  gap: 3.5rem;
`

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 3rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
  }
`

export const ContainerItems = styled.div`
  display: grid;
  gap: 1.5rem;
  justify-content: space-between;
  margin-top: 4.125rem;
  grid-template-columns: 232px 1fr;
`

const BG_COLORS = {
  'yellow-dark': 'yellow-dark',
  'base-text': 'base-text',
  'base-yellow': 'base-yellow',
  'base-purple': 'base-purple',
} as const

interface BgProps {
  bgColor: keyof typeof BG_COLORS
}

export const Items = styled.span<BgProps>`
  align-items: center;
  width: auto;
  display: flex;
  gap: 12px;

  svg {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 8px;

    width: 32px;
    height: 32px;
    background: ${(props) => props.theme[props.bgColor]};
    border-radius: 1000px;
    color: ${(props) => props.theme.white};
  }
`
