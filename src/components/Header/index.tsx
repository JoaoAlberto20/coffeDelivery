import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/Logo.png'
import {
  ContainerHeader,
  ContainerLinkCart,
  ContainerLinkMap,
  ContainerNav
} from './styles'

export function Header() {
  return (
    <ContainerHeader>
      <img src={logo} alt="" />

      <ContainerNav>
        <ContainerLinkMap to="">
          <MapPin size={24} />
          Porto Alegre, RS
        </ContainerLinkMap>

        <ContainerLinkCart to="/checkout">
          <ShoppingCart size={24} fill="#C47F17" />
        </ContainerLinkCart>
      </ContainerNav>
    </ContainerHeader>
  )
}
