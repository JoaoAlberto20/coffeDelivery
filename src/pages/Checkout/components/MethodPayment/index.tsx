import { Bank, CreditCard, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { ButtonsPayment } from '../../../../components/ButtonsPayment'
import { TitleCheckout } from '../../../../components/TitleCheckout'
import { Container, HelperText, PaymentMethodOptionsContainer } from './styles'

export const paymentMethods = [
  {
    label: 'Cartão de crédito',
    icon: <CreditCard size={16} />,
  },
  {
    label: 'Cartão de débito',
    icon: <Bank size={16} />,
  },
  {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  },
]

export function MethodPayment() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const error = errors?.paymentMethod?.message as unknown as string

  return (
    <Container>
      <TitleCheckout
        title="Endereço de Entrega"
        paragraph="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        icon="CurrencyDollar"
      />
      <PaymentMethodOptionsContainer>
        {paymentMethods.map(({ label, icon }, index) => (
          <ButtonsPayment
            key={index}
            id={label}
            icon={icon}
            label={label}
            value={label}
            {...register('paymentMethod')}
          />
        ))}
      </PaymentMethodOptionsContainer>
      {error && <HelperText>{error}</HelperText>}
    </Container>
  )
}
