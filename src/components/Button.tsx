import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx'
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>  {
  children: ReactNode
  className?: string
}

export const Button = ({ children, className , ...props }: ButtonProps) => {

  return (
    <button {...props} className={clsx('py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white', {
    }, className)}>{children}</button>
  )
}