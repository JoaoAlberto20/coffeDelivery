import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { CreatePropsData } from '../../Contexts/COffeeContext'
import { useCountQuantityProduct } from '../../Hook/CountQuantityProduct'
import {
  ButtonCart,
  ContainerAddCart,
  ContainerButtonPLuxMinus,
  ContainerCard,
  ContainerImagemTag,
  ContainerPriceCart,
  ContainerTitle,
} from './styles'

interface CardCoffeeProps {
  item: CreatePropsData
  addCart: (data: CreatePropsData) => void
  descresseCoffeeCart: (id: number) => void
}

export function CardCoffee({
  item,
  addCart,
  descresseCoffeeCart,
}: CardCoffeeProps) {
  const { quantity } = useCountQuantityProduct(item.id)

  const handleAddCoffeeCart = () => {
    addCart(item)
  }

  const handleDecreaseCoffeeCart = () => {
    descresseCoffeeCart(item.id)
  }

  return (
    <ContainerCard>
      <ContainerImagemTag>
        <img src={item.image} alt="name" />
        <div>
          {item.tag.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </ContainerImagemTag>
      <ContainerTitle>
        <h3>{item.name}</h3>
        <span>{item.description}</span>
      </ContainerTitle>
      <ContainerPriceCart>
        <h3>
          <span>R$</span>
          {item.price}
        </h3>
        <ContainerAddCart>
          <ContainerButtonPLuxMinus>
            <button
              title="Diminuir a quantidade do produto carinho carrinho"
              onClick={handleDecreaseCoffeeCart}
            >
              <Minus size={14} weight="fill" />
            </button>
            <span>{quantity}</span>
            <button
              title="Aumentar a quantidade do produto no carrinho"
              onClick={handleAddCoffeeCart}
            >
              <Plus size={14} weight="fill" />
            </button>
          </ContainerButtonPLuxMinus>
          <ButtonCart
            title="Adicionando o produto no carrinho"
            onClick={handleAddCoffeeCart}
          >
            <ShoppingCartSimple weight="fill" />
          </ButtonCart>
        </ContainerAddCart>
      </ContainerPriceCart>
    </ContainerCard>
  )
}
