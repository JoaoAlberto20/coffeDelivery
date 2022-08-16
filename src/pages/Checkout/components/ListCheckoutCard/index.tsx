import { useContext } from 'react'
import { CardCheckout } from '../../../../components/CardCheckout'
import { CoffeeContext } from '../../../../Contexts/COffeeContext'
import { ContainerListProductCheckout } from './styles'

export function ListCheckoutCard() {
  const { itemProduct, addCart, descresseCoffeeCart, removeProductTotal } =
    useContext(CoffeeContext)
  return (
    <ContainerListProductCheckout>
      {!itemProduct.length && (
        <div>
          <span>Você ainda não tem nenhum produto adicionando ao carrinho</span>
        </div>
      )}
      {itemProduct.map((listCoffee) => (
        <CardCheckout
          key={listCoffee.id}
          item={listCoffee}
          addCart={addCart}
          descresseCoffeeCart={descresseCoffeeCart}
          removeProductTotal={removeProductTotal}
        />
      ))}
    </ContainerListProductCheckout>
  )
}
