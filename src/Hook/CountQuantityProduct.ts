import { useContext } from 'react'
import { CoffeeContext } from '../Contexts/COffeeContext'

export const useCountQuantityProduct = (id?: number) => {
  const { itemProduct } = useContext(CoffeeContext)

  if (id !== undefined) {
    const quantity = itemProduct.reduce(
      (acc, product) => (product.id === id ? acc + 1 : acc),
      0,
    )
    return { quantity }
  } else {
    return {
      quantityOfProduct: itemProduct.length,
    }
  }
}
