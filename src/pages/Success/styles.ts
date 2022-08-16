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
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  position: relative;
  background: ${({ theme }) => theme['base-background']};
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }

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
