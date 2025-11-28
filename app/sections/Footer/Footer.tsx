"use client";

import { Container } from "../../../components/ui/Container";

export const Footer = () => {
  return (
    <section className="bg-[#000000] text-white">
      <Container className="py-6 sm:py-8 text-xs sm:text-sm text-white/60">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-medium text-white/80">
              © {new Date().getFullYear()} Apex Capital
            </p>
            <p className="mt-1 max-w-md">
             Өнөөдрийн хөрөнгө оруулалт — маргаашийн боломж
            </p>
          </div>
          <div className="space-y-1 text-right sm:text-right">
            <p>Утас: <a href="tel:+97675107500" className="text-white/80 hover:text-amber-300">+976 7510-7500</a></p>
            <p>Имэйл: <a href="mailto:info@apex.mn" className="text-white/80 hover:text-amber-300">info@apex.mn</a></p>
          </div>
        </div>
      </Container>
    </section>
  );
};
