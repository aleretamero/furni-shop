'use client';
import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useMedia } from '@/hooks/use-media.hook';
import { Dropdown } from '@/components/ui/dropdown.component';
import { MenuButton } from '@/components/common/menu-button';
import { useDropdown } from '@/hooks/use-dropdown.hook';

const data = [
  { id: 'home', name: 'Home', href: '#' },
  { id: 'products', name: 'Products', href: '#' },
  { id: 'features', name: 'Features', href: '#' },
  { id: 'contact', name: 'Contact', href: '#' },
];

export function Navbar() {
  const media = useMedia('md');

  if (media) {
    return (
      <nav>
        <ul className="flex gap-16 text-white">
          {data.map(({ id, name, href }) => (
            <li key={`nav-${id}`}>
              <Link href={href} className="hover:text-light">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return <Dropdown trigger={<MenuButton />} content={<DropDownContent />} />;
}

function DropDownContent() {
  const { close } = useDropdown();

  return (
    <ul
      className="py-2 text-sm text-light"
      aria-labelledby="dropdownDefaultButton"
    >
      {data.map(({ id, name, href }) => (
        <li key={`nav-${id}`}>
          <Link
            href={href}
            className={cn('block px-4 py-2 hover:bg-light hover:text-dark')}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
