import { useFormContext } from 'react-hook-form'
import {
  ContainerComplementNumber,
  ContainerDistrictCity,
  ContainerInput,
  Input,
} from './styles'

export function FormCheckout() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  console.log(errors)

  return (
    <ContainerInput>
      <Input type="text" placeholder="CEP" {...register('cep')} />
      <Input type="text" placeholder="Rua" {...register('street')} />

      <ContainerComplementNumber>
        <Input type="text" placeholder="Número" {...register('number')} />

        <div>
          <Input
            type="text"
            placeholder="Complemento"
            {...register('complemento')}
          />
          <label htmlFor="">Opcional</label>
        </div>
      </ContainerComplementNumber>
      <ContainerDistrictCity>
        <Input type="text" placeholder="Bairro" {...register('logradouro')} />
        <Input type="text" placeholder="Cidade" {...register('city')} />
        <Input type="text" placeholder="UF" {...register('UF')} />
      </ContainerDistrictCity>
    </ContainerInput>
  )
}
