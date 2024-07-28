'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const variants = cva(
  'py-4 px-20 text-white rounded-[10px] text-xl leading-[150%] font-semibold',
  {
    variants: {
      variant: {
        primary: 'bg-primary',
        blur: 'bg-[#E2E2E2]/40 backdrop-blur',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        className={cn(variants({ variant, className }))}
        {...props}
        ref={ref}
      >
        Shop Now
      </button>
    );
  }
);
Button.displayName = 'Button';
