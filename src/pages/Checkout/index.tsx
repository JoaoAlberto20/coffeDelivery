import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import * as Zod from 'zod'

import { InfoCheckout } from './components/InfoCheckout'
import { ListCheckoutCard } from './components/ListCheckoutCard'
import { MethodPayment } from './components/MethodPayment/'
import { TotalPrice } from './components/TotalPrice'

import {
  ContainerButton,
  ContainerCart,
  ContainerForm,
  ContainerInfo,
  ContainerLayout,
} from './styles'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const SchemaForm = Zod.object({
  cep: Zod.string().min(1, 'Informe o Cep'),
  street: Zod.string().min(1, 'Informe a Rua'),
  number: Zod.string().min(1, 'Informe o número do Endereço'),
  complemento: Zod.string().optional(),
  district: Zod.string().min(1, 'Informe o Bairro'),
  city: Zod.string().min(1, 'Informe a Cidade'),
  UF: Zod.string().min(1, 'Informe o UF'),
  paymentMethod: Zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

type NewFormData = Zod.infer<typeof SchemaForm>

export function Checkout() {
  const newForm = useForm<NewFormData>({
    resolver: zodResolver(SchemaForm),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complemento: '',
      district: '',
      city: '',
      UF: '',
      paymentMethod: undefined,
    },
  })

  const { handleSubmit, reset, watch } = newForm

  const handleCreateForm = (data: NewFormData) => {
    reset()
  }

  const isSubmitDisable = !watch('paymentMethod')

  return (
    <main>
      <ContainerForm onSubmit={handleSubmit(handleCreateForm)}>
        <FormProvider {...newForm}>
          <ContainerInfo>
            <h3>Complete seu pedido</h3>
            <InfoCheckout />
            <MethodPayment />
          </ContainerInfo>
        </FormProvider>
        <ContainerCart>
          <h3>Cafés selecionados</h3>
          <ContainerLayout>
            <ListCheckoutCard />
            <TotalPrice />
            <ContainerButton>
              <NavLink to="/success">
                <button type="submit" disabled={isSubmitDisable}>
                  confirmar pedido
                </button>
              </NavLink>
            </ContainerButton>
          </ContainerLayout>
        </ContainerCart>
      </ContainerForm>
    </main>
  )
}
