import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'

export interface CheckboxProps extends Checkbox.CheckboxProps {}

export const CheckboxInput = (props: CheckboxProps) => {
  return (
    <Checkbox.Root className='w-6 h-6 p-[2px] bg-gray-800 rounded' {...props} >
      <Checkbox.Indicator asChild >
        <Check weight='bold' size={20} className='text-cyan-500' />
      </Checkbox.Indicator>
    </Checkbox.Root>
  )
}