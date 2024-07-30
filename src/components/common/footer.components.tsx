import {
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import { Logo } from './logo.component';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { randomUUID } from 'node:crypto';

const socialData = [
  {
    id: randomUUID(),
    icon: FaInstagram,
    href: '#',
  },
  {
    id: randomUUID(),
    icon: FaFacebookSquare,
    href: '#',
  },
  {
    id: randomUUID(),
    icon: FaTwitter,
    href: '#',
  },
  {
    id: randomUUID(),
    icon: FaGithub,
    href: '#',
  },
  {
    id: randomUUID(),
    icon: FaLinkedin,
    href: '#',
  },
];

const columnsData = [
  {
    id: randomUUID(),
    title: 'Our Products',
    links: ['The Support Suite', 'The Sales Suite', 'Support', 'Guide'],
  },
  {
    id: randomUUID(),
    title: 'Top Features',
    links: [
      'Ticketing System',
      'Knowledge Base',
      'Community Forums',
      'Help Desk Software',
    ],
  },
  {
    id: randomUUID(),
    title: 'Resources',
    links: ['Product Support', 'Request Demo', 'Library', 'Peoplepower Blog'],
  },
  {
    id: randomUUID(),
    title: 'Company',
    links: ['About Us', 'Press', 'Investors', 'Events'],
  },
  {
    id: randomUUID(),
    title: 'Favourite Things',
    links: [
      'For Enterprise',
      'For Startups',
      'For Benchmark',
      'For Small Business',
    ],
  },
];

export function Footer() {
  return (
    <footer
      className={cn(
        'bg-primary text-white',
        'px-[max(calc((100%_-_71.25rem)/2),0.5rem)]',
        'sm:px-[max(calc((100%_-_71.25rem)/2),1rem)]',
        'md:px-[max(calc((100%_-_71.25rem)/2),2rem)]'
      )}
    >
      <div className="flex justify-between items-center flex-wrap gap-5 pt-14 pb-12">
        <Logo />
        <nav className="flex gap-4">
          {socialData.map((social) => (
            <Link
              key={social.id}
              className="flex justify-center items-center w-12 h-12 rounded-full bg-[#6D5DD3]/10"
              href={social.href}
            >
              <social.icon className="text-xl" />
            </Link>
          ))}
        </nav>
      </div>

      <div className="w-full h-[1px] bg-white" />

      <div
        className={cn(
          'w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 place-items-start pt-16 pb-[3.125rem] gap-x-8 gap-y-16'
        )}
      >
        {columnsData.map((column) => (
          <FooterColumn
            key={column.id}
            title={column.title}
            links={column.links}
          />
        ))}
      </div>
      <div className="text-center py-5">
        © NameBrand 2022 - All Rights Reserved
      </div>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  links: string[];
}

export function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="flex-1 whitespace-nowrap">
      <h3 className="text-lg mb-6">{title}</h3>
      <ul className="flex flex-col gap-5 font-inter">
        {links.map((link, index) => (
          <li key={`${title}-link-${index}`} className="text-sm">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}
