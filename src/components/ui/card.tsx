import * as React from 'react'
import { cn } from '@/lib/utils'

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('rounded-2xl border border-[#C2C9BC] bg-white shadow-none transition-colors duration-200 hover:border-[#799833]', className)} {...props} />
}
