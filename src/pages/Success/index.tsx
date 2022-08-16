import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import illustration from '../../assets/Illustration.png'
import { CoffeeContext } from '../../Contexts/COffeeContext'
import {
  ContainerInfo,
  ContainerInfoDelivery,
  ContainerSuccess,
  Items
} from './styles'

// R. Alm. Soído, 271 - Santa Helena, Vitória - ES, 29055-020

export function Success() {
  const { itemsSold } = useContext(CoffeeContext)

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
              Entrega em <strong>{itemsSold?.street}</strong>,{' '}
              {itemsSold?.number} - {itemsSold?.district} - {itemsSold?.city},{' '}
              {itemsSold?.UF}, {itemsSold?.cep}
            </span>
          </Items>
          <Items bgColor="base-yellow">
            <Timer size={32} weight="fill" />
            Previsão de entrega 20 min - 30 min
          </Items>
          <Items bgColor="yellow-dark">
            <CurrencyDollar size={32} weight="fill" />
            {`Pagamento na entrega com ${itemsSold?.paymentMethod}`}
          </Items>
        </ContainerInfo>
        <img src={illustration} alt="" />
      </ContainerInfoDelivery>
    </ContainerSuccess>
  )
}
