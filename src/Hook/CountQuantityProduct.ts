import { useContext } from 'react'
import { CoffeeContext } from '../Contexts/COffeeContext'

export const useCountQuantityProduct = (id?: number) => {
  const { itemProductDuplicated } = useContext(CoffeeContext)

  if (id !== undefined) {
    const quantity = itemProductDuplicated.reduce(
      (acc, product) => (product.id === id ? acc + 1 : acc),
      0,
    )
    return { quantity }
  } else {
    return {
      quantityOfProduct: itemProductDuplicated.length,
    }
  }
}
