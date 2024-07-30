import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { FiPlus } from 'react-icons/fi';
import { cn } from '@/lib/utils';
import { Title } from '@/components/common/title.component';
import { Section } from '@/components/layout/section.component';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

import imgProduct1 from '@/assets/images/product-1.webp';
import imgProduct2 from '@/assets/images/product-2.webp';
import imgProduct3 from '@/assets/images/product-3.webp';
import imgProduct4 from '@/assets/images/product-4.webp';
import imgProduct5 from '@/assets/images/product-5.webp';
import imgProduct6 from '@/assets/images/product-6.webp';
import imgProduct7 from '@/assets/images/product-7.webp';
import imgProduct8 from '@/assets/images/product-8.webp';

const productsData = [
  {
    src: imgProduct1,
    alt: 'Ceiling Light',
    name: 'Ceiling Light',
    price: '$75.00',
    discountPrice: '$82.00',
  },
  {
    src: imgProduct2, 
    alt: 'Wood Chair',
    name: 'Wood Chair',
    price: '$50.00',
    discountPrice: '$70.00',
  },
  {
    src: imgProduct3,
    alt: 'Papper Cupboard',
    name: 'Papper Cupboard',
    price: '$105.00',
    discountPrice: '$120.00',
  },
  {
    src: imgProduct4,
    alt: 'Ole Gundorse Spring...',
    name: 'Ole Gundorse Spring...',
    price: '$82.00',
    discountPrice: '$100.00',
  },
  {
    src: imgProduct5,
    alt: 'Treos Seroes 911',
    name: 'Treos Seroes 911',
    price: '$200.00',
    discountPrice: '$210.00',
  },
  {
    src: imgProduct6,
    alt: 'Multi bilderman slibber...',
    name: 'Multi bilderman slibber...',
    price: '$45.00',
    discountPrice: '$50.00',
  },
  {
    src: imgProduct7,
    alt: 'XORA corner desk',
    name: 'XORA corner desk',
    price: '$320.00',
    discountPrice: '$325.00',
  },
  {
    src: imgProduct8,
    alt: 'Black Forest Series wo...',
    name: 'Black Forest Series wo...',
    price: '$225.00',
    discountPrice: '$240.00',
  },
];

export function AllProducts() {
  return (
    <Section autoLayout className="py-[4.375rem]">
      <div
        className={cn(
          'max-w-[33.6875rem] m-auto flex flex-col justify-center items-center gap-8 mb-16'
        )}
      >
        <Title>All Product</Title>
        <p className="text-center text-primary">
          The products we provide only for you as our service are selected from
          the best products with number 1 quality in the world
        </p>
      </div>
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 md:gap-7 mb-[3.125rem]">
          {productsData.map((product, index) => (
            <ProductCard
              key={index}
              src={product.src}
              alt={product.alt}
              name={product.name}
              price={product.price}
              discountPrice={product.discountPrice}
            />
          ))}
        </div>
        <PaginationControlButtons activePage={1} prevDisabled={true} />
      </div>
    </Section>
  );
}

interface ProductCardProps {
  src: string | StaticImport;
  alt: string;
  name: string;
  price: string;
  discountPrice: string;
}

function ProductCard({
  src,
  alt,
  name,
  price,
  discountPrice,
}: ProductCardProps) {
  return (
    <div className="w-full h-full flex flex-col gap-7">
      <div
        className={cn(
          'relative max-w-[17.8125rem] w-full max-h-[18.25rem] h-full overflow-hidden',
          'rounded-[20px] border border-black/10 justify-center items-center',
        )}
      >
        <Image src={src} width={258} height={292} alt={alt} />
        <button
          className={cn(
            'w-[1.875rem] h-[1.875rem] bg-[#D9D9D9] rounded-full text-xl',
            'flex items-center justify-center',
            'absolute bottom-4 right-4'
          )}
        >
          <FiPlus />
        </button>
      </div>
      <div>
        <h3 className="text-xl leading-[130%] text-primary font-semibold mb-2">
          {name}
        </h3>
        <span className="leading-[165%] text-primary mr-4">
          {discountPrice}
        </span>
        <span className="line-through text-primary text-opacity-50 text-sm leading-[165%]">
          {price}
        </span>
      </div>
    </div>
  );
}

interface PaginationControlButtonsProps {
  className?: string;
  activePage?: number;
  onPrevClick?: () => void;
  onNextClick?: () => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
}

function PaginationControlButtons({
  className,
  activePage,
  onPrevClick,
  onNextClick,
  prevDisabled,
  nextDisabled,
}: PaginationControlButtonsProps) {
  return (
    <div className={cn('flex justify-center items-center gap-6', className)}>
      <button
        onClick={onPrevClick}
        disabled={prevDisabled}
        className={cn(
          'w-[3.125rem] h-[3.125rem] rounded-full text-2xl',
          'flex justify-center items-center shadow-lg',
          'bg-white text-primary',
          'disabled:opacity-50'
        )}
      >
        <FaArrowLeft />
      </button>

      <div className="flex gap-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <button
            className={cn(
              'w-[10px] h-[10px] border border-primary bg-transparent rounded-full',
              {
                'bg-primary': activePage === index + 1,
              }
            )}
          />
        ))}
      </div>

      <button
        onClick={onNextClick}
        disabled={nextDisabled}
        className={cn(
          'w-[3.125rem] h-[3.125rem] rounded-full text-2xl',
          'flex justify-center items-center shadow-lg',
          'bg-white text-primary',
          'disabled:opacity-50'
        )}
      >
        <FaArrowRight />
      </button>
    </div>
  );
}
