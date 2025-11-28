"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const AppPhoneShowcase = () => {
  return (
    <section className="relative min-h-[100vh] text-white flex items-center overflow-hidden py-16">

      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#05040a] to-[#020617]" />

      <div className="pointer-events-none absolute left-[-120px] top-1/3 h-80 w-80 bg-amber-500/10 blur-3xl" />


      <div
        style={{ perspective: 1400 }}
       className="relative z-10 container mx-auto px-6 
           flex flex-col-reverse md:flex-row 
           items-center justify-between 
           gap-6 md:gap-10"

      >

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center md:text-left max-w-xl"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
            Омни Ассет II ХБҮЦ арилжаанд<br />Apex Traders 2.0 апп-аар оролцоорой.
          </h2>

          <p className="text-sm sm:text-base text-white/70 leading-relaxed mt-3">
            Захиалга 100% биелсэн тохиолдолд арилжаа хугацаанаас өмнө хаагдаж болзошгүй.
          </p>

          <div className="mt-6 flex items-center gap-4">

            <a
              href="https://apps.apple.com/mn/app/apex-traders/id6651839784"
              target="_blank"
              className="
      flex items-center gap-3
      px-4 py-2
      rounded-xl
      bg-white/5 border border-white/10
      backdrop-blur-md
      hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,200,120,0.15)]
      transition duration-300
    "
            >
              <Image
                src="/images/applestore-badge.png"
                alt="App Store"
                width={32}
                height={32}
                className="object-contain opacity-90"
              />
              <span className="text-sm font-medium text-white/90">App Store</span>

            </a>

            <a
              href="https://play.google.com/store/apps/details?id=mn.apex.caspo&hl=en"
              target="_blank"
              className="
      flex items-center gap-3
      px-4 py-2
      rounded-xl
      bg-white/5 border border-white/10
      backdrop-blur-md
      hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,200,120,0.15)]
      transition duration-300
    "
            >
              <Image
                src="/images/googlestore-badge.png"
                alt="Google Play"
                width={32}
                height={32}
                className="object-contain opacity-90"
              />
              <span className="text-sm font-medium text-white/90">Google Play</span>
            </a>

          </div>


        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 60, rotateY: -60, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateY: 0, rotateX: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-52 sm:w-64 md:w-72 aspect-[9/19] rounded-[2.4rem]
                     bg-gradient-to-b from-zinc-900 to-black border border-white/10
                     p-3 shadow-2xl mx-auto md:mx-0"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
            <Image
              src="/images/app.webp"
              alt="Apex app"
              fill
              className="object-cover"
            />
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 rounded-full bg-black/70" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
