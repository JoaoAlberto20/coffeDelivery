import { ContainerHome, ContainerListCard, ContainerListCoffee } from './styles'

import { Banner } from '../../components/Banner'
import { CardCoffee } from '../../components/CardCoffee'
import { coffeeList } from '../../utils'

export function Home() {
  return (
    <ContainerHome>
      <Banner />
      <ContainerListCoffee>
        <h2>Nossos cafés</h2>
        <ContainerListCard>
          {coffeeList.map((listCoffee) => (
            <CardCoffee
              key={listCoffee.id}
              id={listCoffee.id}
              name={listCoffee.name}
              price={listCoffee.price}
              description={listCoffee.description}
              image={listCoffee.image}
              tag={listCoffee.tag}
            />
          ))}
        </ContainerListCard>
      </ContainerListCoffee>
    </ContainerHome>
  )
}
