import styled from 'styled-components'

export const ContainerSuccess = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;
`

export const ContainerInfoDelivery = styled.div`
  display: flex;
  gap: 6.375rem;
`

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 6px 36px;
  border: 1px solid;
  gap: 2rem;

  @media (max-width: 920px) {
    padding: 0 1rem;
  }
`

const BG_COLORS = {
  'base-purple': 'base-purple',
  'base-yellow': 'base-yellow',
  'yellow-dark': 'yellow-dark',
} as const

interface BgProps {
  bgColor: keyof typeof BG_COLORS
}

export const Items = styled.span<BgProps>`
  align-items: center;
  width: auto;
  display: flex;
  gap: 12px;
  line-height: 130%;

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
