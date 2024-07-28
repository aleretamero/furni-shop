import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

const variants = cva('font-semibold text-primary', {
  variants: {
    tag: {
      h1: 'text-3xl sm:text-5xl leading-[130%]',
      h2: 'text-2xl sm:text-4xl leading-[130%]',
      h3: 'text-lg sm:text-xl leading-[100%]',
      h4: 'text-base sm:text-lg leading-[100%]',
      h5: 'text-sm sm:text-base leading-[100%]',
      h6: 'text-xs sm:text-sm leading-[100%]',
    },
  },
});

interface TitleProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  children: React.ReactNode;
}

export function Title({ tag = 'h2', className, ...props }: TitleProps) {
  const Tag = tag;

  return <Tag className={cn(variants({ tag, className }))} {...props} />;
}
