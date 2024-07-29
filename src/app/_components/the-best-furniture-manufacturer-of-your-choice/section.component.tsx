import Image from 'next/image';

import { Section } from '@/components/layout/section.component';
import { Title } from '@/components/common/title.component';

import image from '@/assets/images/img-3.webp';

export function TheBestFurnitureManuFacturerOfYourChoiceSection() {
  return (
    <Section className="flex-col items-center lg:flex-row gap-[6.25rem] py-24">
      <div className="flex-1 flex flex-col justify-center">
        <Title className="max-w-[21.25rem] sm:max-w-[34.875rem] mt-[2.5625rem] mb-[2.1875rem]">
          The Best Furniture Manufacturer of your choice
        </Title>

        <p className="w-full max-w-[21.25rem] sm:max-w-[36.6875rem] text-primary text:sm sm:text-xl leading-[170%] mb-[2.1875rem]">
          Furnitre power is a software as services for multiperpose business
          management system, expecially for them who are running two or more
          business exploree the future Furnitre power is a software as services
          \
        </p>
      </div>
      <div className="flex-1 max-w-[34.625rem] w-full aspect-[1/0.79] flex justify-center items-center rounded overflow-hidden">
        <Image src={image} alt="We Create image" width={554} height={831} />
      </div>
    </Section>
  );
}
