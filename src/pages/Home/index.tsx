import { Banner } from '../../components/Banner'
import { ListCoffee } from './components/ListCoffee'
import { ContainerHome, ContainerListCoffee } from './styles'

export function Home() {
  return (
    <ContainerHome>
      <Banner />
      <ContainerListCoffee>
        <h2>Nossos cafés</h2>
        <ListCoffee />
      </ContainerListCoffee>
    </ContainerHome>
  )
}
