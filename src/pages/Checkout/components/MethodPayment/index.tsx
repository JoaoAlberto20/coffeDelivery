import { Bank, CreditCard, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { ButtonsPayment } from '../../../../components/ButtonsPayment'
import { TitleCheckout } from '../../../../components/TitleCheckout'
import { Container, HelperText, PaymentMethodOptionsContainer } from './styles'

export const paymentMethods = {
  credit: {
    label: 'Cartão de crédito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Cartão de débito',
    icon: <Bank size={16} />,
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  },
}

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
        paragraph="Informe o endereço onde deseja receber seu pedido"
        icon="MappinInline"
      />
      <PaymentMethodOptionsContainer>
        {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
          <ButtonsPayment
            key={label}
            id={key}
            icon={icon}
            label={label}
            value={key}
            {...register('paymentMethod')}
          />
        ))}
      </PaymentMethodOptionsContainer>
      {error && <HelperText>{error}</HelperText>}
    </Container>
  )
}
