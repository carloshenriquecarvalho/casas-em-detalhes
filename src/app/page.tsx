import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import EsquadriasSection from "@/components/EsquadriasSection";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Hero />
      <SocialProof />
      <ProblemSolution />
      <Services />
      <EsquadriasSection />
      <Benefits />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
