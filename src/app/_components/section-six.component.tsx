import { Title } from '@/components/common/title.component';
import { Section } from '@/components/layout/section.component';
import { Button } from '@/components/ui/button.component';
import { cn } from '@/lib/utils';

export function SectionSix() {
  return (
    <Section
      className={cn(
        'flex-col lg:flex-row pt-[6.25rem] pb-[8.875rem]',
        'bg-contact bg-no-repeat bg-cover',
      )}
    >
      <div
        className={cn(
          'w-full max-w-[34.875rem] ml-auto',
          'pl-2 sm:pl-4 md:pl-8',
          'pr-[max(calc((100%_-_77.5rem)/2),0.5rem)]',
          'sm:pr-[max(calc((100%_-_77.5rem)/2),1rem)]',
          'md:pr-[max(calc((100%_-_77.5rem)/2),2rem)]'
        )}
      >
        <Title className="text-white max-w-[21.8125rem] mb-5">
          Get more discount Off your order
        </Title>
        <p className="text-white mb-10">Join our mailing list</p>
        <form className="w-full flex flex-wrap gap-[1.375rem]" action="">
          <input
            className="flex-1 rounded-[10px] px-6 py-4 inline-block w-full min-w-64"
            type="text"
            placeholder="Your email address"
          />
          <Button className="px-7 [@media(max-width:495px)]:w-full ">Shop Now</Button>
        </form>
      </div>
    </Section>
  );
}
