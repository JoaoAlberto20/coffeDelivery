import { createContext, ReactNode, useEffect, useReducer } from 'react'
import {
  addCoffeeCart,
  decrementCoffeeCart,
  removeCoffeeCart,
} from '../reducers/action'
import { coffeeReducer, CreatePropsData } from '../reducers/reducer'

interface CoffeeContextTypes {
  descresseCoffeeCart: (item: CreatePropsData) => void
  addCart: (product: CreatePropsData) => void
  removeProductTotal: (id: number) => void
  itemProductDuplicated: CreatePropsData[]
  itemProduct: CreatePropsData[]
  totalPrice: number
  totalPriceItems: number
}

export const CoffeeContext = createContext({} as CoffeeContextTypes)

interface CoffeeProviderProps {
  children: ReactNode
}

export function CoffeeProvider({ children }: CoffeeProviderProps) {
  const [stateInitial, dispatch] = useReducer(
    coffeeReducer,
    {
      itemProductDuplicated: [],
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-cart-coffee-delivery-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      } else {
        return { itemProductDuplicated: [] }
      }
    },
  )

  const { itemProductDuplicated } = stateInitial

  const addCart = (product: CreatePropsData) => {
    dispatch(addCoffeeCart(product))
  }

  const descresseCoffeeCart = (item: CreatePropsData) => {
    const newCart = [...itemProductDuplicated]
    const indexProduct = newCart.indexOf(item)
    const cartRemoved = newCart.filter(
      (_product, index) => index !== indexProduct,
    )
    dispatch(decrementCoffeeCart(cartRemoved))
  }

  const removeProductTotal = (id: number) => {
    dispatch(removeCoffeeCart(id))
  }

  const itemProduct = itemProductDuplicated.filter(
    (product, index) => itemProductDuplicated.indexOf(product) === index,
  )

  const totalPriceItems = Number(
    itemProductDuplicated
      .reduce((acc, curr) => acc + Number(curr.price), 0)
      .toFixed(2),
  )

  const totalPrice =
    totalPriceItems !== 0 ? totalPriceItems + 3.29 : totalPriceItems

  useEffect(() => {
    const stateJSON = JSON.stringify(stateInitial)

    localStorage.setItem('@ignite-cart-coffee-delivery-1.0.0', stateJSON)
  }, [stateInitial])

  return (
    <CoffeeContext.Provider
      value={{
        addCart,
        itemProductDuplicated,
        itemProduct,
        descresseCoffeeCart,
        removeProductTotal,
        totalPrice,
        totalPriceItems,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
