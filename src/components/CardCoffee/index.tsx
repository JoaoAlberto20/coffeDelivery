import { ContainerCard, ContainerCardTag, ContainerTitle } from './styles'

interface CardCoffeeProps {
  id: number
  price: number
  name: string
  description: string
  tag: Array<string>
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
      <ContainerCardTag>
        <img src={image} alt="name" />
        <span>{tag.map((tag) => tag)}</span>
      </ContainerCardTag>
      <ContainerTitle>
        <h3>{name}</h3>
        <span>{description}</span>
      </ContainerTitle>
      <span>{price}</span>
    </ContainerCard>
  )
}
