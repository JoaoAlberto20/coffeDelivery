import { ContainerHome, ContainerListCard, ContainerListCoffee } from './styles'

import { useContext } from 'react'
import { Banner } from '../../components/Banner'
import { CardCoffee } from '../../components/CardCoffee'
import { CoffeeContext } from '../../Contexts/COffeeContext'
import { coffeeList } from '../../utils'

export function Home() {
  const { addCart, descresseCoffeeCart } = useContext(CoffeeContext)
  return (
    <ContainerHome>
      <Banner />
      <ContainerListCoffee>
        <h2>Nossos cafés</h2>
        <ContainerListCard>
          {coffeeList.map((listCoffee) => (
            <CardCoffee
              key={listCoffee.id}
              item={listCoffee}
              addCart={addCart}
              descresseCoffeeCart={descresseCoffeeCart}
            />
          ))}
        </ContainerListCard>
      </ContainerListCoffee>
    </ContainerHome>
  )
}
