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
      <div className="flex justify-between items-center pt-14 pb-12">
        <Logo />
        <nav className="flex gap-4">
          <Link
            className="flex justify-center items-center w-12 h-12 rounded-full bg-[#6D5DD3]/10"
            href="#"
          >
            <FaInstagram className="text-2xl" />
          </Link>
          <Link
            className="flex justify-center items-center w-12 h-12 rounded-full bg-[#6D5DD3]/10"
            href="#"
          >
            <FaFacebookSquare className="text-2xl" />
          </Link>
          <Link
            className="flex justify-center items-center w-12 h-12 rounded-full bg-[#6D5DD3]/10"
            href="#"
          >
            <FaTwitter className="text-2xl" />
          </Link>
          <Link
            className="flex justify-center items-center w-12 h-12 rounded-full bg-[#6D5DD3]/10"
            href="#"
          >
            <FaGithub className="text-2xl" />
          </Link>
          <Link
            className="flex justify-center items-center w-12 h-12 rounded-full bg-[#6D5DD3]/10"
            href="#"
          >
            <FaLinkedin className="text-2xl" />
          </Link>
        </nav>
      </div>

      <div className="w-full h-[1px] bg-white" />

      <div className={cn('flex flex-wrap pt-16 pb-[3.125rem] gap-8')}>
        <div className="flex-1 whitespace-nowrap">
          <h3 className="text-lg mb-6">Our Products</h3>
          <ul className="flex flex-col gap-5 font-inter">
            <li className="text-sm">The Support Suite</li>
            <li className="text-sm">The Sales Suite</li>
            <li className="text-sm">Support</li>
            <li className="text-sm">Guide</li>
          </ul>
        </div>
        <div className="flex-1 whitespace-nowrap">
          <h3 className="text-lg mb-6">Our Products</h3>
          <ul className="flex flex-col gap-5 font-inter">
            <li className="text-sm">The Support Suite</li>
            <li className="text-sm">The Sales Suite</li>
            <li className="text-sm">Support</li>
            <li className="text-sm">Guide</li>
          </ul>
        </div>
        <div className="flex-1 whitespace-nowrap">
          <h3 className="text-lg mb-6">Our Products</h3>
          <ul className="flex flex-col gap-5 font-inter">
            <li className="text-sm">The Support Suite</li>
            <li className="text-sm">The Sales Suite</li>
            <li className="text-sm">Support</li>
            <li className="text-sm">Guide</li>
          </ul>
        </div>
        <div className="flex-1 whitespace-nowrap">
          <h3 className="text-lg mb-6">Our Products</h3>
          <ul className="flex flex-col gap-5 font-inter">
            <li className="text-sm">The Support Suite</li>
            <li className="text-sm">The Sales Suite</li>
            <li className="text-sm">Support</li>
            <li className="text-sm">Guide</li>
          </ul>
        </div>
        <div className="flex-1 whitespace-nowrap">
          <h3 className="text-lg mb-6">Our Products</h3>
          <ul className="flex flex-col gap-5 font-inter">
            <li className="text-sm">The Support Suite</li>
            <li className="text-sm">The Sales Suite</li>
            <li className="text-sm">Support</li>
            <li className="text-sm">Guide</li>
          </ul>
        </div>
      </div>
      <div className="text-center py-5">
        © NameBrand 2022 - All Rights Reserved
      </div>
    </footer>
  );
}
