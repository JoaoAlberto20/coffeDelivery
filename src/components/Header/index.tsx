import { MapPin, ShoppingCart } from 'phosphor-react'
import { memo } from 'react'
import { useLocation } from 'react-router-dom'
import logo from '../../assets/Logo.png'
import { useCountQuantityProduct } from '../../Hook/CountQuantityProduct'
import {
  ContainerHeader,
  ContainerLinkCart,
  ContainerLinkMap,
  ContainerNav,
} from './styles'

function Header() {
  const { pathname } = useLocation()
  const { quantityOfProduct } = useCountQuantityProduct()

  return (
    <ContainerHeader>
      <img src={logo} alt="" />

      <ContainerNav>
        <ContainerLinkMap to="">
          <MapPin size={24} weight="fill" />
          Porto Alegre, RS
        </ContainerLinkMap>

        <ContainerLinkCart to="/checkout">
          <ShoppingCart size={24} weight="fill" />
          {pathname === '/checkout' && <span>{quantityOfProduct}</span>}
        </ContainerLinkCart>
      </ContainerNav>
    </ContainerHeader>
  )
}

export default memo(Header)
