import { createContext, ReactNode, useState } from 'react'

export interface CreatePropsData {
  id: number
  price: string
  name: string
  description?: string
  tag?: string[]
  image: string
}

interface CoffeeContextTypes {
  descresseCoffeeCart: (id: number) => void
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
  const [itemProductDuplicated, setItemProductDuplicated] = useState<
    CreatePropsData[]
  >([])

  const addCart = (product: CreatePropsData) => {
    setItemProductDuplicated((prevState) => [...prevState, product])
  }

  const descresseCoffeeCart = (id: number) => {
    const product = itemProductDuplicated.filter((item) => item.id === id)
    if (product.length > 1) {
      const itemProductRemoved = product.slice(1)
      setItemProductDuplicated(itemProductRemoved)
    }
  }

  const removeProductTotal = (id: number) => {
    const product = itemProductDuplicated.filter((item) => item.id !== id)
    setItemProductDuplicated(product)
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
