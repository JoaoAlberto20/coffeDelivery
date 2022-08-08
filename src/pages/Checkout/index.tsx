import { useContext } from 'react'
import { CardCheckout } from '../../components/CardCheckout'
import { CheckoutInputs } from '../../components/CheckoutInputs'
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

export function Checkout() {
  const { itemProduct } = useContext(CoffeeContext)

  return (
    <main>
      <ContainerForm>
        <ContainerInfo>
          <h3>Complete seu pedido</h3>
          <ContainerLayout>
            <TitleCheckout
              title="Endereço de Entrega"
              paragraph="Informe o endereço onde deseja receber seu pedido"
              icon="MappinInline"
            />
            <CheckoutInputs />
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
              {itemProduct.map((listCoffee) => (
                <CardCheckout
                  key={listCoffee.id}
                  id={listCoffee.id}
                  name={listCoffee.name}
                  image={listCoffee.image}
                  price={listCoffee.price}
                />
              ))}
            </ContainerListProductCheckout>

            <ContainerPrice>
              <ContainerTotalItens>
                <p>Total de itens</p>
                <span>R$ 29,70</span>
              </ContainerTotalItens>
              <ContainerDelivery>
                <p>Entrega</p>
                <span>R$ 3,29</span>
              </ContainerDelivery>

              <ContainerTotalPrice>
                <h3>Total</h3>
                <span>R$ 33,20</span>
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
