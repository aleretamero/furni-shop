'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface DropdownData {
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
}

export const DropdownContext = React.createContext<DropdownData>(
  {} as DropdownData
);

interface DropdownProps {
  trigger?: React.ReactNode;
  content?: React.ReactNode;
  className?: string;
  position?: 'left' | 'right';
  closeOnScroll?: boolean;
}

export function Dropdown({
  trigger,
  content,
  className,
  position = 'right',
  closeOnScroll = true,
}: DropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      closeOnScroll && setIsOpen(false);
    };

    if (closeOnScroll) addEventListener('scroll', handleScroll);

    return () => {
      removeEventListener('scroll', handleScroll);
    };
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsOpen(false);
        }
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen]);

  const handleClickedOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <DropdownContext.Provider
      value={{
        isOpen,
        toggle: () => setIsOpen(!isOpen),
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      }}
    >
      <div className="relative">
        <div
          className={cn({
            'after:fixed after:inset-0': isOpen,
          })}
          onClick={handleClickedOutside}
        />
        {trigger}
        {isOpen && (
          <div
            className={cn(
              'divide-gray-100 divide-y bg-secondary/90 text-white',
              'absolute top-8 z-[99] rounded-lg shadow w-44',
              {
                'right-0': position === 'right',
                'left-0': position === 'left',
              },
              className
            )}
          >
            {content}
          </div>
        )}
      </div>
    </DropdownContext.Provider>
  );
}
