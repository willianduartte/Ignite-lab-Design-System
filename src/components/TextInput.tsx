import { Slot } from '@radix-ui/react-slot'
import { InputHTMLAttributes, ReactNode } from 'react'

export interface TextInputRoot {
  children: ReactNode
}

const TextInputRoot = ({ children }: TextInputRoot ) => {
  return (
    <div className=' flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'>
      {children}
    </div>
  )
}

export type TextInputIcon = {
  children: ReactNode
}

const TextInputIcon = ({ children }: TextInputIcon ) => {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      {children}
    </Slot>
  )
}

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInputInput = (props: TextInputProps ) => {

  return (
      <input {...props} className='bg-transparent flex-1 text-gray-100 text-xs outline-none placeholder:text-gray-400'/>
  )
}

export const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Input: TextInputInput
}