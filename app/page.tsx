import { Hero } from "./sections/Hero/Hero";
import { Tagline } from "./sections/Tagline/Tagline";
import { InvestmentDetails } from "./sections/InvestmentDetails/InvestmentDetails";
import { LogoStrip } from "./sections/LogoStrip/LogoStrip";
import { Footer } from "./sections/Footer/Footer";
import { AppPhoneShowcase } from "./sections/AppPhoneShowCase/AppPhoneShowCase";


export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <Tagline />
      <InvestmentDetails />
      <AppPhoneShowcase />
      <LogoStrip />
      <Footer />
    </main>
  );
}
