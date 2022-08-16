import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as Zod from 'zod'
import { CoffeeContext } from '../../Contexts/COffeeContext'

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
  credit = 'Cartão de Crédito',
  debit = 'Cartão de Debito',
  money = 'Dinheiro',
}

const SchemaForm = Zod.object({
  cep: Zod.string()
    .regex(/\d{5}-\d{3}/, 'Informe um cep válido Ex: 00000-000')
    .min(9, 'Informe o Cep'),
  street: Zod.string().min(1, 'Informe a Rua'),
  number: Zod.string().min(1, 'Informe o número do Endereço'),
  complemento: Zod.string().optional(),
  district: Zod.string().min(1, 'Informe o Bairro'),
  city: Zod.string().min(1, 'Informe a Cidade'),
  UF: Zod.string().min(1, 'Informe o UF'),
  paymentMethod: Zod.string().min(1, 'Informe o método de pagamento'),
})

export type NewFormData = Zod.infer<typeof SchemaForm>

export function Checkout() {
  const navigate = useNavigate()
  const { getItmSold } = useContext(CoffeeContext)

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
    getItmSold(data)
    navigate('/success')
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
              <button type="submit" disabled={isSubmitDisable}>
                confirmar pedido
              </button>
            </ContainerButton>
          </ContainerLayout>
        </ContainerCart>
      </ContainerForm>
    </main>
  )
}
