import {
  ContainerComplementNumber,
  ContainerDistrictCity,
  ContainerInput,
  Input,
} from './styles'

export function CheckoutInputs() {
  return (
    <ContainerInput>
      <Input type="text" placeholder="CEP" />
      <Input type="text" placeholder="Rua" />

      <ContainerComplementNumber>
        <Input type="text" placeholder="Número" />

        <div>
          <Input type="text" placeholder="Complemento" />
          <label htmlFor="">Opcional</label>
        </div>
      </ContainerComplementNumber>
      <ContainerDistrictCity>
        <Input type="text" placeholder="Bairro" />
        <Input type="text" placeholder="Cidade" />
        <Input type="text" placeholder="UF" />
      </ContainerDistrictCity>
    </ContainerInput>
  )
}
