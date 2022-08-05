import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  ContainerBanner,
  ContainerItems,
  ContainerTitle,
  Items,
} from './styles'

import banner from '../../assets/Banner.png'

export function Banner() {
  return (
    <ContainerBanner>
      <div>
        <ContainerTitle>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </ContainerTitle>
        <ContainerItems>
          <Items bgColor="yellow-dark">
            <ShoppingCart weight="fill" />
            Compra simples e segura
          </Items>
          <Items bgColor="base-text">
            <Package weight="fill" />
            Embalagem mantém o café intacto
          </Items>
          <Items bgColor="base-yellow">
            <Timer size={32} weight="fill" />
            Entrega rápida e rastreada
          </Items>
          <Items bgColor="base-purple">
            <Coffee weight="fill" />O café chega fresquinho até você
          </Items>
        </ContainerItems>
      </div>
      <div>
        <img src={banner} alt="" />
      </div>
    </ContainerBanner>
  )
}
