import { randomUUID } from 'node:crypto';
import { cn } from '@/lib/utils';

const data = [
  {
    id: randomUUID(),
    title: 'Years of Experience',
    value: '7',
  },
  {
    id: randomUUID(),
    title: 'Opened in the country',
    value: '100',
  },
  {
    id: randomUUID(),
    title: 'Furniture sold',
    value: '10K+',
  },
  {
    id: randomUUID(),
    title: 'Variant Furniture',
    value: '260+',
  },
];

interface CardsInfoProps {
  className?: string;
}

export function CardsInfo({ className }: CardsInfoProps) {
  return (
    <div className={cn('auto-layout', className)}>
      <div
        className={cn(
          'w-full rounded-xl bg-secondary py-10',
          // 'flex justify-between items-center'
          'grid grid-cols-2 md:grid-cols-4 place-items-center gap-y-[3.875rem]'
        )}
      >
        {data.map((item, index) => (
          <Card
            key={item.id}
            title={item.title}
            value={item.value}
            className={cn(
              index !== data.length - 1 && 'border-r-2',
              index === 1 && 'border-r-0 md:border-r-2'
            )}
          />
        ))}
      </div>
    </div>
  );
}

interface CardProps {
  title: string;
  value: string;
  className?: string;
}

function Card({ title, value, className }: CardProps) {
  return (
    <div
      className={cn(
        'max-w-[18.875rem] w-full h-[3.75rem] md:h-[6.25rem] overflow-hidden',
        'flex-shrink-0 text-white border-white',
        'flex flex-col items-center justify-center gap-1',
        className
      )}
    >
      <span className="text-2xl md:text-[2.5rem] leading-[120%] font-semibold">
        {value}
      </span>
      <span className="max-w-28 w-full text-sm md:text-xl text-center leading-[130%] font-normal tracking-[1%]">
        {title}
      </span>
    </div>
  );
}