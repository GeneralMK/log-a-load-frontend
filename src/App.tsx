import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Services } from "./components/Services";
import { AppPreview } from "./components/AppPreview";
import { Drivers } from "./components/Drivers";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { PolicyDialog } from "./components/PolicyDialog";
import { useWebsiteInteractions } from "./useWebsiteInteractions";
import { useMotion } from "./hooks/useMotion";
export default function App() {
  useWebsiteInteractions();
  useMotion();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AppPreview />
        <HowItWorks />
        <Services />
        <Drivers />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <PolicyDialog />
    </>
  );
}
