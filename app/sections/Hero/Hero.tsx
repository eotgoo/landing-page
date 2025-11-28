"use client";

import { motion } from "framer-motion";
import { Container } from "../../../components/ui/Container";
import { LogoRow } from "../../../components/common/LogoRow";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#020617] via-[#050816] to-[#05040a] text-white">
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-80px] bottom-20 h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl" />

      <Container className="relative z-10 flex flex-col min-h-[80vh] py-12 md:min-h-[90vh] md:py-20">
        <LogoRow />

        <div className="mt-8 sm:mt-10 md:mt-14 flex flex-col gap-10 md:gap-12 md:flex-row ...">
          <div className="max-w-xl mx-auto text-center md:text-left space-y-6 md:mx-0">
            <p className="inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-amber-300/90">
              Omni Asset II
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-semibold leading-tight tracking-tight">
              Хөрөнгөөр баталгаажсан
              <br />
              <span className="text-amber-300">
                үнэт цаас
              </span>
            </h1>

            <p className="mx-auto max-w-md text-[15px] sm:text-base text-slate-300/90 md:mx-0 leading-relaxed">
              Omni Asset 2 нь бодит хөрөнгөөр баталгаажсан, тогтмол хүүгийн орлого өгдөг найдвартай хөрөнгө оруулалтын боломж.
            </p>
          </div>

          <div className="w-full max-w-sm sm:max-w-md md:max-w-sm lg:max-w-lg mx-auto md:mx-0">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl shadow-[0_25px_55px_rgba(0,0,0,0.45)]">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">Жилийн хүү</p>
                  <p className="text-sm font-semibold text-slate-50 mt-0.5">
                    19.20% <span className="text-emerald-400 text-[11px]">/ жил</span>
                  </p>
                </div>
              </div>

              <LineChartAnimated />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const LineChartAnimated = () => {
  return (
    <svg
      viewBox="0 0 200 120"
      className="w-full h-auto max-h-52 sm:max-h-60 md:max-h-64 overflow-visible"
    >
      <g stroke="rgba(148,163,184,0.25)" strokeWidth="0.5">
        <line x1="0" y1="100" x2="200" y2="100" />
        <line x1="0" y1="70" x2="200" y2="70" />
        <line x1="0" y1="40" x2="200" y2="40" />
      </g>

      <defs>
        <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="50%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>

        <linearGradient id="fillGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(251,191,36,0.35)" />
          <stop offset="100%" stopColor="rgba(15,23,42,0)" />
        </linearGradient>
      </defs>

      <motion.path
        d="M5 100 L35 80 L70 90 L105 55 L140 65 L175 35 L195 25 L195 120 L5 120 Z"
        fill="url(#fillGradient)"
        initial={{ opacity: 0, translateY: 10 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.8 }}
      />

      <motion.path
        d="M5 100 L35 80 L70 90 L105 55 L140 65 L175 35 L195 25"
        fill="none"
        stroke="url(#lineGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 1.4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      <motion.circle
        cx="195"
        cy="25"
        r="4"
        fill="#fbbf24"
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      />
    </svg>
  );
};
