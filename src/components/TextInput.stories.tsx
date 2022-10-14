import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputRoot } from "./TextInput";
import { Envelope } from 'phosphor-react'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
        <TextInput.Icon>
          <Envelope />
        </TextInput.Icon>,
        <TextInput.Input placeholder='Type your e-mail address' />
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<TextInputRoot>

export const Default: StoryObj<TextInputRoot> = {}

export const WithoutIcon: StoryObj<TextInputRoot> = {
  args: {
    children: <TextInput.Input placeholder='Type your e-mail address' />
  }
}