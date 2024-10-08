import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'text-md font-medium hover:bg-primary/90 bg-primary-weak dark:bg-primary-ghost text-primary hover:text-primary-strong',
        primaryOutline:
          'text-md font-medium hover:bg-primary/90 border-[1px] dark:border-primary-ghost border-primary-weak bg-background text-primary hover:text-primary-strong',
        accent: 'inline-flex items-center justify-center gap-2.5 bg-background text-white',
        accentOutline:
          'text-md font-medium inline-flex items-center justify-center gap-2.5 border-2 border-accent bg-background text-accent',
        // secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'text-md font-medium text-primary-strong hover:text-primary',
        link: 'text-md font-medium text-primary underline-offset-4 hover:underline',
        destructive: 'text-md font-medium bg-destructive text-primary-foundation hover:bg-destructive/90',
      },
      size: {
        default: 'h-9 rounded-full px-4 py-2',
        sm: 'h-8 rounded-full px-3 text-xs',
        lg: 'h-10 rounded-full px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
