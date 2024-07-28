import { cn } from '@/lib/utils';

interface CardProps {
  title: string;
  value: string;
  className?: string;
}

export function CardInfo({ title, value, className }: CardProps) {
  return (
    <div
      className={cn(
        'max-w-[18.875rem] w-full h-[6.25rem] overflow-hidden',
        'flex-shrink-0 text-white border-white',
        'flex flex-col items-center justify-center gap-1',
        className
      )}
    >
      <span className="text-[2.5rem] leading-[120%] font-semibold">
        {value}
      </span>
      <span className="max-w-28 w-full text-xl text-center leading-[130%] font-normal tracking-[1%]">
        {title}
      </span>
    </div>
  );
}
