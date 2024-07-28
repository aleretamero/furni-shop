'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const variants = cva('bg-white rounded', {
  variants: {
    direction: {
      horizontal: 'w-[1px] h-full',
      vertical: 'w-full h-[1px]',
    },
  },
  defaultVariants: {
    direction: 'vertical',
  },
});

export interface SeparatorProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof variants> {}

export const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, direction, ...props }, ref) => {
    return (
      <div
        className={cn(variants({ direction, className }))} //variants({ direction, className })
        {...props}
        ref={ref}
      />
    );
  }
);
Separator.displayName = 'Separator';
