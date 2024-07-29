import { Header } from '@/components/common/header.component';
import { Hero } from '@/app/_components/hero/hero.component';
import { CardsInfo } from '@/app/_components/hero/cards-info.component';
import { WeCreateYourHomeMoreAesteticSection } from '@/app/_components/we-create-your-home-more-aestetic/section.component';
import { NewIsStoreNowSection } from '@/app/_components/new-is-store-now/section.component';
import { TheBestFurnitureManuFacturerOfYourChoiceSection } from '@/app/_components/the-best-furniture-manufacturer-of-your-choice/section.component';
import { WhatPeopleAreSayingAboutUs } from '@/app/_components/what-people-are-saying-about-us/section.component';
import { Contact } from '@/app/_components/contact/section.component';
import { Footer } from '@/components/common/footer.components';

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <div className="w-full min-h-screen flex flex-col">
        <Hero />
        <CardsInfo className="z-[2] relative -top-24" />
      </div>
      <WeCreateYourHomeMoreAesteticSection />
      <NewIsStoreNowSection />
      <TheBestFurnitureManuFacturerOfYourChoiceSection />
      <WhatPeopleAreSayingAboutUs />
      <Contact />
      <Footer />

      {/* 
      <section>
        <div>
          <h2>All Product</h2>
          <p>
            The products we provide only for you as our service are selected
            from the best products with number 1 quality in the world
          </p>
        </div>
        <div>
          <div>
            <div>
              <div>
                <Image src="/assets/images/sofa.webp" alt="Sofa" />
                <span>+</span>
              </div>
              <div>
                <h3>Ceiling Light</h3>
                <span>$75.00</span>
                <span>$82.00</span>
              </div>
            </div>
            <div>
              <div>
                <Image src="/assets/images/sofa.webp" alt="Sofa" />
                <span>+</span>
              </div>
              <div>
                <h3>Ceiling Light</h3>
                <span>$75.00</span>
                <span>$82.00</span>
              </div>
            </div>
            <div>
              <div>
                <Image src="/assets/images/sofa.webp" alt="Sofa" />
                <span>+</span>
              </div>
              <div>
                <h3>Ceiling Light</h3>
                <span>$75.00</span>
                <span>$82.00</span>
              </div>
            </div>
            <div>
              <div>
                <Image src="/assets/images/sofa.webp" alt="Sofa" />
                <span>+</span>
              </div>
              <div>
                <h3>Ceiling Light</h3>
                <span>$75.00</span>
                <span>$82.00</span>
              </div>
            </div>
            <div>
              <div>
                <Image src="/assets/images/sofa.webp" alt="Sofa" />
                <span>+</span>
              </div>
              <div>
                <h3>Ceiling Light</h3>
                <span>$75.00</span>
                <span>$82.00</span>
              </div>
            </div>
            <div>
              <div>
                <Image src="/assets/images/sofa.webp" alt="Sofa" />
                <span>+</span>
              </div>
              <div>
                <h3>Ceiling Light</h3>
                <span>$75.00</span>
                <span>$82.00</span>
              </div>
            </div>
            <div>
              <div>
                <Image src="/assets/images/sofa.webp" alt="Sofa" />
                <span>+</span>
              </div>
              <div>
                <h3>Ceiling Light</h3>
                <span>$75.00</span>
                <span>$82.00</span>
              </div>
            </div>
            <div>
              <div>
                <Image src="/assets/images/sofa.webp" alt="Sofa" />
                <span>+</span>
              </div>
              <div>
                <h3>Ceiling Light</h3>
                <span>$75.00</span>
                <span>$82.00</span>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>
      */}
    </div>
  );
}
