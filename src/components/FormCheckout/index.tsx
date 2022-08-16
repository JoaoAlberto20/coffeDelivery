import { useFormContext } from 'react-hook-form'
import { Input } from '../Input'
import {
  ContainerComplementNumber,
  ContainerDistrictCity,
  ContainerInput,
} from './styles'

interface ErrosTypes {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function FormCheckout() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrosTypes

  return (
    <ContainerInput>
      <Input
        error={errors.cep?.message}
        isError={!errors.cep?.message}
        type="text"
        placeholder="Cep"
        {...register('cep')}
      />
      <Input
        error={errors.street?.message}
        isError={!errors.street?.message}
        type="text"
        placeholder="Rua"
        {...register('street')}
      />

      <ContainerComplementNumber>
        <Input
          error={errors.number?.message}
          isError={!errors.number?.message}
          type="text"
          placeholder="Número"
          {...register('number')}
        />

        <div>
          <Input
            error={errors.complemento?.message}
            isError={!errors.complemento?.message}
            type="text"
            placeholder="Complemento"
            {...register('complemento')}
          />
          <label htmlFor="">Opcional</label>
        </div>
      </ContainerComplementNumber>
      <ContainerDistrictCity>
        <Input
          error={errors.district?.message}
          isError={!errors.district?.message}
          type="text"
          placeholder="Bairro"
          {...register('district')}
        />
        <Input
          error={errors.city?.message}
          isError={!errors.city?.message}
          type="text"
          placeholder="Cidade"
          {...register('city')}
        />
        <Input
          error={errors.UF?.message}
          isError={!errors.UF?.message}
          type="text"
          placeholder="UF"
          {...register('UF')}
        />
      </ContainerDistrictCity>
    </ContainerInput>
  )
}
