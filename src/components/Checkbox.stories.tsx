import { Meta, StoryObj } from '@storybook/react'
import { CheckboxInput, CheckboxProps } from "./Checkbox";
import { Text } from './Text';

export default {
  title: 'Components/Checkbox',
  component: CheckboxInput,
  args: {},
  argTypes: {},
  decorators: [
    (story) => {
      return (
        <div className='flex items-center gap-2'>
          {story()}
          <Text size='sm'>Lembrar-me de mim por 30 dias</Text>
        </div>
      )
    }
  ]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}