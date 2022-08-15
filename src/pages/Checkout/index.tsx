import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import * as yup from 'yup'

import { CardCheckout } from '../../components/CardCheckout'
import { FormCheckout } from '../../components/FormCheckout'
import { MethodPayment } from '../../components/MethodPayment'
import { TitleCheckout } from '../../components/TitleCheckout'
import { CoffeeContext } from '../../Contexts/COffeeContext'

import {
  ContainerButton,
  ContainerCart,
  ContainerDelivery,
  ContainerForm,
  ContainerInfo,
  ContainerLayout,
  ContainerListProductCheckout,
  ContainerPrice,
  ContainerTotalItens,
  ContainerTotalPrice,
} from './styles'

const SchemaForm = yup.object().shape({
  cep: yup
    .string()
    .matches(/\d{5}-\d{3}/, 'O cep deve ser nesse formato 00000-000')
    .required(),
  logradouro: yup.string().required('Por favor! digite seu Logradouro'),
  number: yup.string().required('Por favor! digite seu número'),
  complemento: yup.string().optional(),
  street: yup.string().required('Por favor! digite sua rua'),
  city: yup.string().required('Por favor! digite seu cidade'),
  UF: yup
    .string()
    .min(2, 'Digite Apena 2 caracteres')
    .uppercase('A siglá deve ser em letra maiúscula')
    .required('Por favor! digite seu estado'),
})

type NewFormData = yup.InferType<typeof SchemaForm>

export function Checkout() {
  const {
    itemProduct,
    addCart,
    descresseCoffeeCart,
    removeProductTotal,
    totalPrice,
    totalPriceItems,
  } = useContext(CoffeeContext)

  const newForm = useForm<NewFormData>({
    resolver: yupResolver(SchemaForm),
  })

  const { handleSubmit, reset } = newForm

  const handleCreateForm = (data: NewFormData) => {
    console.log(data)
    reset()
  }

  return (
    <main>
      <ContainerForm onSubmit={handleSubmit(handleCreateForm)}>
        <ContainerInfo>
          <h3>Complete seu pedido</h3>
          <ContainerLayout>
            <TitleCheckout
              title="Endereço de Entrega"
              paragraph="Informe o endereço onde deseja receber seu pedido"
              icon="MappinInline"
            />
            <FormProvider {...newForm}>
              <FormCheckout />
            </FormProvider>
          </ContainerLayout>
          <ContainerLayout>
            <TitleCheckout
              title="Endereço de Entrega"
              paragraph="Informe o endereço onde deseja receber seu pedido"
              icon="CurrencyDollar"
            />
            <MethodPayment />
          </ContainerLayout>
        </ContainerInfo>
        <ContainerCart>
          <h3>Cafés selecionados</h3>
          <ContainerLayout>
            <ContainerListProductCheckout>
              {!itemProduct.length && (
                <div>
                  <span>
                    Você ainda não tem nenhum produto adicionando ao carrinho
                  </span>
                </div>
              )}
              {itemProduct.map((listCoffee) => (
                <CardCheckout
                  key={listCoffee.id}
                  item={listCoffee}
                  addCart={addCart}
                  descresseCoffeeCart={descresseCoffeeCart}
                  removeProductTotal={removeProductTotal}
                />
              ))}
            </ContainerListProductCheckout>

            <ContainerPrice>
              <ContainerTotalItens>
                <p>Total de itens</p>
                <span>{`R$ ${totalPriceItems.toFixed(2)}`}</span>
              </ContainerTotalItens>
              <ContainerDelivery>
                <p>Entrega</p>
                <span>R$ 3,29</span>
              </ContainerDelivery>

              <ContainerTotalPrice>
                <h3>Total</h3>
                <span>{`${totalPrice.toFixed(2)}`}</span>
              </ContainerTotalPrice>
            </ContainerPrice>
            <ContainerButton>
              <button type="submit">confirmar pedido</button>
            </ContainerButton>
          </ContainerLayout>
        </ContainerCart>
      </ContainerForm>
    </main>
  )
}
