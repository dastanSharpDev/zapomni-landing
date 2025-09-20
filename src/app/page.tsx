import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
// import CtaAsk from "@/components/CtaAsk";
import CashierAutomation from "@/components/CashierAutomation";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <CashierAutomation />

      {/* <CtaAsk /> */}
      <Footer />
    </main>
  );
}
