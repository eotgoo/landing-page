"use client";

import { MotionView } from "../../../components/animations/MotionView";
import { Container } from "../../../components/ui/Container";

const data = [
  { label: "Үнэт цаасны нийт дүн:", value: "14.0 ТЭРБУМ ТӨГРӨГ" },
  { label: "Жилийн хүү:", value: "19.20%" },
  { label: "Хугацаа:", value: "24 САР" },
  { label: "Нэгж үнэ:", value: "100,000₮" },
  { label: "Хүүгийн төлөлт:", value: "Улирлаар" },
  { label: "Арилжаа нээгдэх өдөр:", value: "2025.06.25" },


];

export const InvestmentDetails = () => {
  return (
    <section
      className="
        relative 
        py-12 sm:py-16 md:py-20 
        bg-gradient-to-b 
        from-[#050816] via-[#030712] to-[#020617]
        text-white
        overflow-hidden
      "
    >
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-70px] bottom-5 top-30 h-50 w-100 rounded-full bg-yellow-400/10 blur-3xl" />

      <Container>
        <MotionView className="text-center mb-8 sm:mb-10 relative z-10">
          <p className="tracking-[0.22em] text-xs sm:text-sm uppercase text-white/70">
            ХӨРӨНГӨ ОРУУЛАЛТЫН НӨХЦӨЛ
          </p>
        </MotionView>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
          {data.map((item, i) => (
            <MotionView key={item.label} delay={i * 0.07}>
              <div className="h-full rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5 backdrop-blur text-left">
                <p className="text-[11px] sm:text-xs text-white/60 uppercase tracking-wide">
                  {item.label}
                </p>
                <p className="mt-2 text-xl sm:text-2xl font-semibold">
                  {item.value}
                </p>
              </div>
            </MotionView>
          ))}
        </div>
      </Container>
    </section>
  );
};
