import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva('inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F7D00] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',{variants:{variant:{default:'bg-[#4F7D00] text-white shadow-[0_12px_30px_-14px_rgba(79,125,0,.95)] hover:-translate-y-0.5 hover:bg-[#3E6500]',outline:'border border-[#BFD3A2] bg-white text-[#23400D] hover:border-[#4F7D00] hover:bg-[#F5F7F1]',ghost:'text-[#2D3D30] hover:bg-[#EBF2DE]'},size:{default:'h-11 px-6 py-2',sm:'h-9 rounded-lg px-4',lg:'h-12 rounded-xl px-8 text-base'}},defaultVariants:{variant:'default',size:'default'}})
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean }
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => { const Comp = asChild ? Slot : 'button'; return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} /> })
Button.displayName='Button'
export { Button, buttonVariants }
