import { createContext, ReactNode, useEffect, useState } from 'react'

export interface CreatePropsData {
  id: number
  price: string
  name: string
  description: string
  tag: string[]
  image: string
}

interface CoffeeContextTypes {
  descresseCoffeeCart: (id: number) => void
  addCart: (product: CreatePropsData) => void
  itemProductDuplicated: CreatePropsData[]
  itemProduct: CreatePropsData[]
}

export const CoffeeContext = createContext({} as CoffeeContextTypes)

interface CoffeeProviderProps {
  children: ReactNode
}

export function CoffeeProvider({ children }: CoffeeProviderProps) {
  const [itemProductDuplicated, setItemProductDuplicated] = useState<
    CreatePropsData[]
  >([])
  const [itemProduct, setItemProduct] = useState<CreatePropsData[]>([])

  const addCart = (product: CreatePropsData) => {
    setItemProductDuplicated((prevState) => [...prevState, product])
  }

  const descresseCoffeeCart = (id: number) => {
    const product = itemProductDuplicated.filter((item) => item.id === id)
    const itemProductRemoved = product.slice(1)
    setItemProductDuplicated(itemProductRemoved)
  }

  useEffect(() => {
    const removeProductDuplicated = () => {
      const filteredArray = itemProductDuplicated.filter(
        (product, index) => itemProductDuplicated.indexOf(product) === index,
      )
      setItemProduct(filteredArray)
    }

    removeProductDuplicated()
  }, [itemProductDuplicated])

  return (
    <CoffeeContext.Provider
      value={{
        addCart,
        itemProductDuplicated,
        itemProduct,
        descresseCoffeeCart,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
