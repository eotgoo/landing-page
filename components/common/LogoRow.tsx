"use client";

import Image from "next/image";

export const LogoRow = () => {
  return (
    <div className="flex items-center justify-between gap-4 mb-10">
      <div className="flex items-center gap-3 min-w-0">
        <Image
          src="/images/omni-capital-logo.svg"
          alt="Omni Capital"
          width={40}
          height={24}
          className="sm:w-[50px] sm:h-[30px] lg:w-[60px] lg:h-[50px] object-contain"
        />
        <span className="text-white text-base sm:text-lg font-medium truncate">
          Омни Капитал
        </span>
      </div>
      <Image
        src="/images/apex-capital-logo.png"
        alt="Apex Capital"
        width={100}
        height={40}
        className="sm:w-[120px] sm:h-[50px] object-contain"
      />
    </div>
  );
};
