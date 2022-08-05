import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { ContainerTitle } from './styles'

interface TitleCheckoutProps {
  title: string
  paragraph: string
  icon: string
}

export function TitleCheckout({ title, paragraph, icon }: TitleCheckoutProps) {
  return (
    <ContainerTitle>
      {icon === 'MappinInline' ? (
        <MapPinLine color="#C47F17" />
      ) : (
        <CurrencyDollar color="#8047F8" />
      )}

      <div>
        <h4>{title}</h4>
        <p>{paragraph}</p>
      </div>
    </ContainerTitle>
  )
}
