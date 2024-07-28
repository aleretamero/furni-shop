'use client';
import { cn } from '@/lib/utils';
import { useDropdown } from '@/hooks/use-dropdown.hook';

export function MenuButton() {
  const { isOpen, toggle } = useDropdown();

  return (
    <button
      className={cn(
        'w-6 px-[3px] gap-[0.375rem] outline-none',
        'flex flex-col justify-between items-center'
      )}
      onClick={toggle}
    >
      <div
        className={cn(
          'w-full bg-white border border-white rounded',
          'transform origin-center transition-all duration-300',
          isOpen && 'rotate-45 translate-y-1'
        )}
      />
      <div
        className={cn(
          'w-[80%] self-end bg-white border border-white rounded',
          'transform origin-center transition-all duration-300',
          isOpen && 'hidden'
        )}
      />
      <div
        className={cn(
          'w-full bg-white border border-white rounded',
          'transform origin-center transition-all duration-300',
          isOpen && '-rotate-45 -translate-y-1'
        )}
      />
    </button>
  );
}
