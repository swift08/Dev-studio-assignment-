import Image from "next/image";
import { inria, inriaBold } from "@/lib/fonts";

const heroBg = "/assets/hero%20section%20car.png";

export default function Hero() {
  return (
    <section className="relative flex min-h-[70vh] w-full flex-col items-center justify-center overflow-hidden bg-gray-900 px-4 py-16 sm:min-h-[75vh] sm:flex-row sm:items-center sm:gap-12 sm:px-8 lg:min-h-[680px] lg:gap-16 lg:px-12">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{ backgroundImage: `url('${heroBg}')` }}
      />
      <div className="absolute inset-0 bg-black/50" aria-hidden />
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full shrink-0 justify-center sm:w-auto">
          <div className="relative flex h-40 w-full max-w-sm items-center justify-center overflow-hidden rounded-[20px] bg-white p-4 shadow-xl sm:h-48 sm:w-72 sm:max-w-none md:h-52 md:w-80 lg:h-[408px] lg:w-[453px]">
            <Image
              id="hero-heading"
              src="/assets/COMING%20SOON%20(1).png"
              alt="Coming Soon"
              fill
              className="object-contain p-4"
              sizes="(max-width: 640px) 320px, (max-width: 768px) 288px, 453px"
              priority
            />
          </div>
        </div>
        <div className="max-w-xl text-center sm:text-left">
          <h1 className={`${inriaBold.className} text-[28px] font-bold leading-[1] text-white sm:text-[36px] lg:text-[44px]`}>
            Smart Car Rentals for City & Outstation Travel
          </h1>
          <p className={`${inria.className} mt-4 text-[18px] leading-[1] text-white sm:text-[20px] lg:text-[22px]`}>
            Book trusted car rentals and comfortable outstation trips with professional drivers at the best prices.
          </p>
        </div>
      </div>
    </section>
  );
}
