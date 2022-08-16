import { FormCheckout } from '../../../../components/FormCheckout'
import { TitleCheckout } from '../../../../components/TitleCheckout'
import { Container } from './styles'

export function InfoCheckout() {
  return (
    <Container>
      <TitleCheckout
        title="Endereço de Entrega"
        paragraph="Informe o endereço onde deseja receber seu pedido"
        icon="MappinInline"
      />
      <FormCheckout />
    </Container>
  )
}
