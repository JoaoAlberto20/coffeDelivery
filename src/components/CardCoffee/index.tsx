import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
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
  id: number
  price: string
  name: string
  description: string
  tag: string[]
  image: string
}

export function CardCoffee({
  id,
  price,
  name,
  description,
  tag,
  image,
}: CardCoffeeProps) {
  return (
    <ContainerCard>
      <ContainerImagemTag>
        <img src={image} alt="name" />
        <div>
          {tag.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </ContainerImagemTag>
      <ContainerTitle>
        <h3>{name}</h3>
        <span>{description}</span>
      </ContainerTitle>
      <ContainerPriceCart>
        <h3>
          <span>R$</span>
          {price}
        </h3>
        <ContainerAddCart>
          <ContainerButtonPLuxMinus>
            <button title="Diminuir a quantidade do produto carinho carrinho">
              <Minus size={14} weight="fill" />
            </button>
            <span>1</span>
            <button title="Aumentar a quantidade do produto no carrinho">
              <Plus size={14} weight="fill" />
            </button>
          </ContainerButtonPLuxMinus>
          <ButtonCart title="Adicionando o produto no carrinho">
            <ShoppingCartSimple weight="fill" />
          </ButtonCart>
        </ContainerAddCart>
      </ContainerPriceCart>
    </ContainerCard>
  )
}
