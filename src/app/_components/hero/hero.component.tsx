import { Button } from '@/components/ui/button.component';

export function Hero() {
  return (
    <section
      className="
        w-full min-h-[90vh] flex-1 bg-hero bg-cover bg-right-bottom bg-no-repeat
        flex flex-col justify-center items-center relative      
        after:h-[14.3125rem] after:z-[1] after:absolute after:-bottom-20 after:left-0 after:right-0 
        after:bg-gradient-to-b after:from-transparent after:via-60% after:via-white/50 after:to-white/100
      "
    >
      <div className="flex justify-center items-center flex-col">
        <h1
          className="
            w-full mb-[1.875rem] font-semibold
            text-white  text-center 
            max-w-[18.125rem] sm:max-w-96 md:max-w-[55.5rem] 
            text-2xl sm:text-3xl md:text-[4rem] md:leading-[120%]
          "
        >
          Creative Home Simpify your Furniture
        </h1>

        <p
          className="
            w-full max-w-[18.125rem] sm:max-w-96 md:max-w-[39.1875rem] mb-[4.0625rem] 
            text-white text-center font-normal leading-[150%]
            text-sm sm:text-base md:text-lg
          "
        >
          Do i have consent to record this meeting gain locaion,
          root-and-branch, review, nor game plan who’s the goto
        </p>
        <Button variant="blur">Shop Now</Button>
      </div>
    </section>
  );
}
