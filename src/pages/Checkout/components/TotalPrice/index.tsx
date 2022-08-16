import { useContext } from 'react'
import { CoffeeContext } from '../../../../Contexts/COffeeContext'
import {
  ContainerDelivery,
  ContainerPrice,
  ContainerTotalItens,
  ContainerTotalPrice,
} from './styles'

export function TotalPrice() {
  const { totalPrice, totalPriceItems } = useContext(CoffeeContext)
  return (
    <ContainerPrice>
      <ContainerTotalItens>
        <p>Total de itens</p>
        <span>{`R$ ${totalPriceItems.toFixed(2)}`}</span>
      </ContainerTotalItens>
      <ContainerDelivery>
        <p>Entrega</p>
        <span>R$ 3,29</span>
      </ContainerDelivery>
      <ContainerTotalPrice>
        <h3>Total</h3>
        <span>{`R$ ${totalPrice.toFixed(2)}`}</span>
      </ContainerTotalPrice>
    </ContainerPrice>
  )
}
