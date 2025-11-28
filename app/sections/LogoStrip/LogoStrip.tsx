"use client";

import Image from "next/image";
import { MotionView } from "../../../components/animations/MotionView";

export const LogoStrip = () => {
    return (
        <section className="
     py-10 sm:py-12
    bg-gradient-to-b from-[#020617] via-[#05040a] to-[#000000]
    text-white
      ">
            <div
                className="
          max-w-5xl mx-auto
          flex flex-col md:flex-row
          items-center md:items-center
          justify-center
          gap-6 sm:gap-8 md:gap-12 lg:gap-20
          px-4 sm:px-6
        "
            >
                <MotionView>
                    <div className="flex items-center justify-center gap-3">
                        <Image
                            src="/images/omni-capital-logo.svg"
                            alt="Omni Capital"
                            width={40}
                            height={40}
                            className="object-contain opacity-90 sm:w-[45px] sm:h-[45px]"
                        />
                        <span className="text-white/90 text-sm sm:text-base font-medium">
                            Омни Капитал
                        </span>
                    </div>
                </MotionView>

                <MotionView delay={0.1}>
                    <div className="flex items-center justify-center gap-3">
                        <Image
                            src="/images/omni-capital-logo.svg"
                            alt="Omni Asset II"
                            width={40}
                            height={40}
                            className="object-contain opacity-90 sm:w-[45px] sm:h-[45px]"
                        />
                        <span className="text-white/90 text-sm sm:text-base font-medium">
                            Омни Ассет II
                        </span>
                    </div>
                </MotionView>

                <MotionView delay={0.2}>
                    <div className="flex items-center justify-center">
                        <Image
                            src="/images/apex-capital-logo.png"
                            alt="Apex Capital"
                            width={90}
                            height={55}
                            className="object-contain opacity-100 sm:w-[100px] sm:h-[65px]"
                        />
                    </div>
                </MotionView>
            </div>
        </section>
    );
};
