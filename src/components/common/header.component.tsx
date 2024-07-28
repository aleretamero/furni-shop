'use client';

import * as React from 'react';

import { Logo } from '@/components/common/logo.component';
import { Navbar } from '@/components/common/navbar.component';
import { cn } from '@/lib/utils';

export function Header() {
  const [isTop, setIsTop] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 28);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'h-7 z-50 flex justify-between items-center auto-layout py-11',
        'fixed top-0 left-0 right-0',
        {
          'backdrop-blur bg-secondary/40': !isTop,
          'bg-transparent': isTop,
        }
      )}
    >
      <Logo />
      <Navbar />
    </header>
  );
}
