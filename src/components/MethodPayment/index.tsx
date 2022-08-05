import { Bank, CreditCard, Money } from 'phosphor-react'
import { ContainerMethodPayment } from './styles'

export function MethodPayment() {
  return (
    <ContainerMethodPayment>
      <button type="button">
        <CreditCard size={24} />
        Cartão de crédito
      </button>
      <button type="button">
        <Money size={24} />
        Cartão de débito
      </button>
      <button type="button">
        <Bank size={24} />
        Dinheiro
      </button>
    </ContainerMethodPayment>
  )
}
