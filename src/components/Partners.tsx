import Image from "next/image";

export const Partners = () => {
  return (
    <div className="space-y-4 py-4 md:py-10">
      <div className="flex justify-between space-x-6 px-32">
        <div className="relative flex-1 h-32 md:h-[120px]">
          <Image
            src="/images/about-us/food-hygiene-department.png"
            alt="Food and Environmental Hygiene Department logo"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative flex-1 h-36 md:h-[120px]">
          <Image
            src="/images/about-us/lutheran-social-service.png"
            alt="Hong Kong Lutheran Social Service logo"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="relative w-full h-32 md:h-[350px]">
        <Image
          src="/images/partner-banner.jpeg"
          alt="partner logos"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex px-32">
        <div className="relative flex-1 h-32 md:h-[140px]">
          <Image
            src="/images/about-us/hkcs_chi.png"
            alt="香港基督教服務處 logo"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative flex-1 h-32 md:h-[140px]">
          <Image
            src="/images/about-us/outer.png"
            alt="葵青深宵外展服務 logo"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative flex-1 h-32 md:h-[140px]">
          <Image
            src="/images/about-us/clapjc.png"
            alt="Clap JC logo"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative flex-1 h-32 md:h-[140px]">
          <Image
            src="/images/about-us/sie-fund.png"
            alt="Sie Fund logo"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};
