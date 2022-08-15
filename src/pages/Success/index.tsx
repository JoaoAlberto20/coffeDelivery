import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import illustration from '../../assets/Illustration.png'
import {
  ContainerInfo,
  ContainerInfoDelivery,
  ContainerSuccess,
  Items,
} from './styles'

export function Success() {
  return (
    <ContainerSuccess>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <ContainerInfoDelivery>
        <ContainerInfo>
          <Items bgColor="base-purple">
            <MapPin size={32} weight="fill" />
            <span>
              Entrega em Rua <strong>João Daniel Martinelli</strong>, 102
              Farrapos - Porto Alegre, RS
            </span>
          </Items>
          <Items bgColor="base-yellow">
            <Timer size={32} weight="fill" />
            Previsão de entrega 20 min - 30 min
          </Items>
          <Items bgColor="yellow-dark">
            <CurrencyDollar size={32} weight="fill" />
            Pagamento na entrega com Cartão de Crédito
          </Items>
        </ContainerInfo>
        <img src={illustration} alt="" />
      </ContainerInfoDelivery>
    </ContainerSuccess>
  )
}
