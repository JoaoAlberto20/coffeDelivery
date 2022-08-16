import { useContext } from 'react'
import { CardCoffee } from '../../../../components/CardCoffee'
import { CoffeeContext } from '../../../../Contexts/COffeeContext'
import { coffeeList } from '../../../../utils'
import { ContainerListCard } from './styles'

export function ListCoffee() {
  const { addCart, descresseCoffeeCart } = useContext(CoffeeContext)
  return (
    <ContainerListCard>
      {coffeeList.map((listCoffee, i) => (
        <CardCoffee
          key={listCoffee.id}
          item={listCoffee}
          addCart={addCart}
          descresseCoffeeCart={descresseCoffeeCart}
        />
      ))}
    </ContainerListCard>
  )
}
