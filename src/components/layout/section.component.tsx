import { cn } from '@/lib/utils';

interface SectionProps {
  autoLayout?: boolean;
  layout?: 'flex' | 'grid';
  className?: string;
  children: React.ReactNode;
}

export function Section({
  children,
  className,
  autoLayout = true,
  layout = 'flex',
}: SectionProps) {
  return (
    <section
      className={cn(
        layout === 'flex' && 'flex flex-col',
        layout === 'grid' && 'grid grid-cols-12 content-center',
        autoLayout && 'auto-layout',
        className
      )}
    >
      {children}
    </section>
  );
}
