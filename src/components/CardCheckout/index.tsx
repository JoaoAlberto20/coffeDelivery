import { Minus, Plus, Trash } from 'phosphor-react'
import { CreatePropsData } from '../../Contexts/COffeeContext'
import { useCountQuantityProduct } from '../../Hook/CountQuantityProduct'
import {
  ButtonCart,
  ContainerAddCart,
  ContainerButtonImageTitle,
  ContainerButtonPLuxMinus,
  ContainerCard,
} from './styles'

interface CardCheckoutProps {
  item: CreatePropsData
  addCart: (data: CreatePropsData) => void
  descresseCoffeeCart: (id: number) => void
  removeProductTotal: (id: number) => void
}

export function CardCheckout({
  item,
  addCart,
  descresseCoffeeCart,
  removeProductTotal,
}: CardCheckoutProps) {
  const { quantity } = useCountQuantityProduct(item.id)

  const handleAddCoffeeCart = () => {
    addCart(item)
  }

  const handleDecreaseCoffeeCart = () => {
    descresseCoffeeCart(item.id)
  }

  const handleRemoveItemCart = () => {
    removeProductTotal(item.id)
  }

  return (
    <ContainerCard>
      <ContainerButtonImageTitle>
        <img src={item.image} alt={item.name} />
        <div>
          <h3>{item.name}</h3>
          <ContainerAddCart>
            <ContainerButtonPLuxMinus>
              <button
                title="Diminuir a quantidade do produto carinho carrinho"
                onClick={handleDecreaseCoffeeCart}
                type="button"
              >
                <Minus size={14} weight="fill" />
              </button>
              <span>{quantity}</span>
              <button
                title="Aumentar a quantidade do produto no carrinho"
                onClick={handleAddCoffeeCart}
                type="button"
              >
                <Plus size={14} weight="fill" />
              </button>
            </ContainerButtonPLuxMinus>
            <ButtonCart
              title="Remover o produto do carrinho"
              onClick={handleRemoveItemCart}
              type="button"
            >
              <Trash size={14} />
              Remover
            </ButtonCart>
          </ContainerAddCart>
        </div>
      </ContainerButtonImageTitle>
      <p>
        <span>R$</span>
        {item.price}
      </p>
    </ContainerCard>
  )
}
