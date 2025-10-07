import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ComoFuncionaSection } from "@/components/sections/ComoFuncionaSection";
import { VantagensSection } from "@/components/sections/VantagensSection";
import { DepoimentosSection } from "@/components/sections/DepoimentosSection";
import { CadastroSection } from "@/components/sections/CadastroSection";
import { EmpresasHeroSection } from "@/components/sections/EmpresasHeroSection";
import { BeneficiosSection } from "@/components/sections/BeneficiosSection";
import { DemoSection } from "@/components/sections/DemoSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState<"prestadores" | "empresas">("prestadores");

  // Scroll to top when section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeSection]);

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />
      
      {activeSection === "prestadores" ? (
        <>
          <HeroSection />
          <ComoFuncionaSection />
          <VantagensSection />
          <DepoimentosSection />
          <CadastroSection />
        </>
      ) : (
        <>
          <EmpresasHeroSection />
          <BeneficiosSection />
          <DemoSection />
        </>
      )}
      
      <Footer />
    </div>
  );
};

export default Index;
