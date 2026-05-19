import * as React from 'react'
import { cn } from '@/lib/utils'
export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) { return <div className={cn('rounded-2xl border border-border/80 bg-white/90 shadow-sm', className)} {...props} /> }
