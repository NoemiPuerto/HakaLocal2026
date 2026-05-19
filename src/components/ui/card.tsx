import * as React from 'react'
import { cn } from '@/lib/utils'

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('rounded-3xl border border-[#D7E5C7] bg-white shadow-[0_10px_30px_-24px_rgba(22,51,0,.55)] transition-all duration-300 hover:border-[#A7D948]', className)} {...props} />
}
