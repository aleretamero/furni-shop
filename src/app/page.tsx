import { Header } from '@/components/common/header.component';
import { Hero } from '@/app/_components/hero.component';
import { CardsInfo } from '@/app/_components/cards-info.component';
import { SectionOne } from '@/app/_components/section-one.component';
import { SectionTwo } from '@/app/_components/section-two.component';
import { SectionThree } from '@/app/_components/section-three.component';
import { SectionFour } from '@/app/_components/section-four.component';
import { SectionSix } from '@/app/_components/section-six.component';
import { Footer } from '@/components/common/footer.components';
import { SectionFive } from '@/app/_components/section-five.component';

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <div className="w-full min-h-screen flex flex-col">
        <Hero />
        <CardsInfo className="z-[2] relative -top-24" />
      </div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFive />
      <SectionFour />
      <SectionSix />
      <Footer />
    </div>
  );
}
