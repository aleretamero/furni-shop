import { Header } from '@/components/common/header.component';
import { Hero } from '@/app/_components/hero/hero.component';
import { CardsInfo } from '@/app/_components/hero/cards-info.component';
import { WeCreateYourHomeMoreAesteticSection } from '@/app/_components/we-create-your-home-more-aestetic/section.component';
import { NewIsStoreNowSection } from '@/app/_components/new-is-store-now/section.component';
import { TheBestFurnitureManuFacturerOfYourChoiceSection } from '@/app/_components/the-best-furniture-manufacturer-of-your-choice/section.component';

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
      <section>
        <div>
          <h2>What people are saying about us</h2>
          <div>
            <div>
              <div>
                <div>
                  <Image src="/assets/images/sofa.webp" alt="Sofa" />
                </div>
                <div>
                  <h3>Josh Smith</h3>
                  <p>Manager of The New York Times</p>
                </div>
              </div>
              <div>
                <p>
                  “They are have a perfect touch for make something so
                  professional ,interest and useful for a lot of people .”
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div>
          <Image src="/assets/images/sofa.webp" alt="Sofa" />
        </div>
      </section>
      <section>
        <div>
          <h2>Get more discount Off your order</h2>
          <p>Join our mailing list</p>
          <form action="">
            <input type="text" placeholder="Your email address" />
            <button>Shop Now</button>
          </form>
        </div>
      </section>
      <footer>
        <div>
          <div className="text-4xl font-bold text-white">FurniShop</div>
          <nav>
            <button>Instagram</button>
            <button>Facebook</button>
            <button>Twitter</button>
            <button>Github</button>
            <button>Linkedin</button>
          </nav>
        </div>
        <div />
        <div>
          <div>
            <h3>Our Products</h3>
            <ul>
              <li>The Support Suite</li>
              <li>The Sales Suite</li>
              <li>Support</li>
              <li>Guide</li>
            </ul>
          </div>
          <div>
            <h3>Our Products</h3>
            <ul>
              <li>The Support Suite</li>
              <li>The Sales Suite</li>
              <li>Support</li>
              <li>Guide</li>
            </ul>
          </div>
          <div>
            <h3>Our Products</h3>
            <ul>
              <li>The Support Suite</li>
              <li>The Sales Suite</li>
              <li>Support</li>
              <li>Guide</li>
            </ul>
          </div>
          <div>
            <h3>Our Products</h3>
            <ul>
              <li>The Support Suite</li>
              <li>The Sales Suite</li>
              <li>Support</li>
              <li>Guide</li>
            </ul>
          </div>
          <div>
            <h3>Our Products</h3>
            <ul>
              <li>The Support Suite</li>
              <li>The Sales Suite</li>
              <li>Support</li>
              <li>Guide</li>
            </ul>
          </div>
        </div>
        <div>© NameBrand 2022 - All Rights Reserved</div>
      </footer> */}
    </div>
  );
}
