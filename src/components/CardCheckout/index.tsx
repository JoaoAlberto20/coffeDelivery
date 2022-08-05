import { Minus, Plus, Trash } from 'phosphor-react'
import {
  ButtonCart,
  ContainerAddCart,
  ContainerButtonImageTitle,
  ContainerButtonPLuxMinus,
  ContainerCard,
} from './styles'

interface CardCheckoutProps {
  image: string
  name: string
  price: string
  id: number
}

export function CardCheckout({ image, name, price, id }: CardCheckoutProps) {
  return (
    <ContainerCard>
      <ContainerButtonImageTitle>
        <img src={image} alt={name} />
        <div>
          <h3>{name}</h3>
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
            <ButtonCart title="Remover o produto no carrinho">
              <Trash size={14} />
              Remover
            </ButtonCart>
          </ContainerAddCart>
        </div>
      </ContainerButtonImageTitle>
      <p>
        <span>R$</span>
        {price}
      </p>
    </ContainerCard>
  )
}
