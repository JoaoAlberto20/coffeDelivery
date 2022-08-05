import { createContext, ReactNode, useState } from 'react'

export interface CreatePropsData {
  id: number
  price: string
  name: string
  description: string
  tag: string[]
  image: string
}

interface CoffeeContextTypes {
  descresseCoffeeCart: (id: CreatePropsData) => void
  addCart: (product: CreatePropsData) => void
  itemProduct: CreatePropsData[]
}

export const CoffeeContext = createContext({} as CoffeeContextTypes)

interface CoffeeProviderProps {
  children: ReactNode
}

export function CoffeeProvider({ children }: CoffeeProviderProps) {
  const [itemProduct, setItemProduct] = useState<CreatePropsData[]>([])

  const addCart = (product: CreatePropsData) => {
    setItemProduct((prevState) => [...prevState, product])
  }

  const descresseCoffeeCart = (product: CreatePropsData) => {
    const itemForRemove = itemProduct.filter((item) => item.id === product.id)
    console.log(itemForRemove)
  }

  return (
    <CoffeeContext.Provider
      value={{
        addCart,
        itemProduct,
        descresseCoffeeCart,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
