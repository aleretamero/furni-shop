'use client';

import Image, { StaticImageData } from 'next/image';
import image from '@/assets/images/img-3.webp';
import avatar from '@/assets/images/avatar-1.webp';
import { Title } from '@/components/common/title.component';
import { Section } from '@/components/layout/section.component';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { cn } from '@/lib/utils';

export function WhatPeopleAreSayingAboutUs() {
  return (
    <Section className="py-[4.375rem]">
      <div
        className={cn(
          'w-full relative',
          'flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8'
        )}
      >
        <div className="flex-1 flex flex-col justify-start gap-10">
          <Title>What People Are Saying About Us</Title>

          <ReportCard
            src={avatar}
            alt="Person 1"
            name="Josh Smith"
            position="Manager of The New York Times"
            comment={
              '"They are have a perfect touch for make something so professional, interest and useful for a lot of people."'
            }
          />
        </div>
        <div className="flex-1 max-w-[34.625rem] w-full flex justify-center items-center rounded overflow-hidden">
          <Image src={image} alt="We Create image" width={562} height={340} />
        </div>
        <ControlButtons
          onPrevClick={() => {}}
          onNextClick={() => {}}
          prevDisabled={true}
          nextDisabled={false}
          className="lg:absolute bottom-0 left-0"
        />
      </div>
    </Section>
  );
}

interface ReportCardProps {
  src: string | StaticImageData;
  alt: string;
  name: string;
  position: string;
  comment: string;
}

function ReportCard({ src, alt, name, position, comment }: ReportCardProps) {
  return (
    <div className="flex flex-col gap-7 w-full max-w-[30rem]">
      <div className="flex items-center gap-5">
        <Avatar src={src} alt={alt} />
        <div className="flex flex-col">
          <span className="text-primary font-semibold ">{name}</span>
          <span className="text-primary text-sm leading-[100%]">
            {position}
          </span>
        </div>
      </div>
      <div>
        <p className="text-primary leading-[170%]">{comment}</p>
      </div>
    </div>
  );
}

interface AvatarProps {
  src: string | StaticImageData;
  alt: string;
}

function Avatar({ src, alt }: AvatarProps) {
  return (
    <div className="w-20 h-20 rounded-full overflow-hidden">
      <Image src={src} alt={alt} width={80} height={80} />
    </div>
  );
}

interface ControlButtonsProps {
  className?: string;
  onPrevClick: () => void;
  onNextClick: () => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
}

function ControlButtons({
  className,
  onPrevClick,
  onNextClick,
  prevDisabled,
  nextDisabled,
}: ControlButtonsProps) {
  return (
    <div className={cn('flex justify-center items-center gap-6', className)}>
      <button
        onClick={onPrevClick}
        disabled={prevDisabled}
        className={cn(
          'w-[3.125rem] h-[3.125rem] rounded-full text-2xl',
          'flex justify-center items-center shadow-lg',
          'bg-[#286F6C] text-white',
          'disabled:bg-white disabled:text-primary'
        )}
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={onNextClick}
        disabled={nextDisabled}
        className={cn(
          'w-[3.125rem] h-[3.125rem] rounded-full text-2xl',
          'flex justify-center items-center shadow-lg',
          'bg-[#286F6C] text-white',
          'disabled:bg-white disabled:text-primary'
        )}
      >
        <FaArrowRight />
      </button>
    </div>
  );
}
