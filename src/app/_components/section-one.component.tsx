import Image from 'next/image';
import image from '@/assets/images/img-1.webp';
import { FaCheckCircle } from 'react-icons/fa';
import { Section } from '@/components/layout/section.component';
import { Title } from '@/components/common/title.component';

export function SectionOne() {
  return (
    <Section className="flex-col-reverse items-start md:items-center lg:flex-row gap-[6.25rem] py-[3.125rem] md:py-[4.625rem]">
      <div className="flex-1 xl:col-span-6 max-w-[34.625rem] w-full aspect-[1/0.79] flex justify-center items-center rounded overflow-hidden">
        <Image src={image} alt="We Create image" width={554} height={831} />
      </div>
      <div className="flex-1 xl:col-span-6 flex flex-col justify-center">
        <Title className="max-w-[21.25rem] sm:max-w-[28.5rem] mb-4">
          We Create Your Home More Aestetic
        </Title>

        <p className="w-full max-w-[21.25rem] sm:max-w-[36.6875rem] text-primary text-sm sm:text-xl leading-[170%] mb-[2.1875rem]">
          Furnitre power is a software as services for multiperpose business
          management system,
        </p>
        <ul className="max-w-[21.25rem] sm:max-w-[36.1875rem] w-full space-y-[1.5625rem]">
          <li className="flex gap-4 items-start">
            <span className="w-6 h-6 sm:w-8 sm:h-8 flex justify-center items-center">
              <FaCheckCircle className="text-primary w-[1.14rem] h-[1.14rem] sm:w-[24.89px] sm:h-[24.89px]" />
            </span>
            <div className="space-y-2 p-1">
              <Title tag="h3">Valuation Services</Title>
              <p>
                Sometimes features require a short description. This can be
                detailed description
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="w-6 h-6 sm:w-8 sm:h-8 flex justify-center items-center">
              <FaCheckCircle className="text-primary w-[1.14rem] h-[1.14rem] sm:w-[24.89px] sm:h-[24.89px]" />
            </span>
            <div className="space-y-2 p-1">
              <Title tag="h3" className="text-base sm:text-xl">
                Development of Furniture Modelss
              </Title>
              <p className="text-sm sm:text-base">
                Sometimes features require a short description. This can be
                detailed description
              </p>
            </div>
          </li>
        </ul>
      </div>
    </Section>
  );
}
