import { forwardRef, InputHTMLAttributes } from 'react'
import { ContainerInput, HelperText, TextInput } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  isError: true | false
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, isError, ...rest }, ref) => {
    return (
      <ContainerInput>
        <TextInput isError={isError} {...rest} ref={ref} />
        {error && <HelperText>{error}</HelperText>}
      </ContainerInput>
    )
  },
)
