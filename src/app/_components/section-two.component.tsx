import Image from 'next/image';
import Link from 'next/link';
import { Title } from '@/components/common/title.component';
import { Section } from '@/components/layout/section.component';

import chair from '@/assets/images/chair.webp';
import bed from '@/assets/images/bed.webp';
import cupboard from '@/assets/images/cupboard.webp';
import lighting from '@/assets/images/lighting.webp';
import { FaArrowRightLong } from 'react-icons/fa6';

const data = [
  { image: chair, title: 'Chair' },
  { image: bed, title: 'Bed' },
  { image: cupboard, title: 'Cupboard' },
  { image: lighting, title: 'Lighting' },
];

export function SectionTwo() {
  return (
    <Section
      className="!pr-0 py-[3.125rem] md:py-[4.375rem] flex-col md:flex-row gap-[4.375rem] overflow-x-hidden"
      autoLayout
    >
      <div
        className="
          flex-shrink-0 w-full md:w-[15.3125rem] flex flex-row md:flex-col
          justify-start items-center md:items-start gap-5 md:gap-0
        "
      >
        <Title className="md:mt-[1.875rem] md:mb-[5.5625rem] max-w-[7.75rem]">
          New In Store Now
        </Title>
        <p className="text-sm sm:text-base text-primary leading-[170%] md:pb-12 max-w-[12.875rem]">
          Get the latest items immediately with promo prices
        </p>
        <Link
          href="#"
          className="hidden md:inline-flex justify-start items-center gap-[0.625rem]"
        >
          <span className="text-primary font-normal text-base tracking-[1%] border-b border-primary leading-4">
            Check All
          </span>
          <FaArrowRightLong className="text-primary w-[1.25rem] h-[1.25rem]" />
        </Link>
      </div>
      <div className="flex-shrink-0 flex gap-5 overflow-hidden">
        {data.map((item) => (
          <div
            key={item.title}
            className="relative rounded overflow-hidden w-[16.2625rem] min-w-[12.375rem]"
          >
            <Image src={item.image} objectFit="cover" alt={item.title} />
            <span
              className="
                text-white font-semibold text-xl text-center py-2
                absolute bottom-5 left-1/2 transform -translate-x-1/2
              "
            >
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
