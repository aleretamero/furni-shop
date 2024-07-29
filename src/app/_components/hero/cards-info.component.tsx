import { randomUUID } from 'node:crypto';
import { cn } from '@/lib/utils';
import { CardInfo } from '@/app/_components/hero/card-info.component';

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
    <div
      className={cn(
        'px-[max(calc((100%_-_77.5rem)/2),0.5rem)]',
        'sm:px-[max(calc((100%_-_77.5rem)/2),1rem)]',
        'md:px-[max(calc((100%_-_77.5rem)/2),2rem)]',
        className
      )}
    >
      <div
        className={cn(
          'w-full rounded-xl bg-secondary py-10',
          // 'flex justify-between items-center'
          'grid grid-cols-2 md:grid-cols-4 place-items-center gap-y-[3.875rem]'
        )}
      >
        {data.map((item, index) => (
          <CardInfo
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
