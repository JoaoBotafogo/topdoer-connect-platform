import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import topdoerLogo from "@/assets/topdoer-logo.png";

interface NavbarProps {
  activeSection: "prestadores" | "empresas";
  onSectionChange: (section: "prestadores" | "empresas") => void;
}

export const Navbar = ({ activeSection, onSectionChange }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  const prestadoresLinks = [
    { label: "Início", id: "hero" },
    { label: "Como Funciona", id: "como-funciona" },
    { label: "Vantagens", id: "vantagens" },
    { label: "Depoimentos", id: "depoimentos" },
  ];

  const empresasLinks = [
    { label: "Início", id: "empresas-hero" },
    { label: "Benefícios", id: "beneficios" },
    { label: "Solicitar Demo", id: "demo" },
  ];

  const currentLinks = activeSection === "prestadores" ? prestadoresLinks : empresasLinks;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={topdoerLogo} alt="TopDoer" className="h-10" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {currentLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Section Toggle */}
          <div className="hidden md:flex items-center space-x-2">
            <Button
              variant={activeSection === "prestadores" ? "default" : "outline"}
              onClick={() => onSectionChange("prestadores")}
              className="font-medium"
            >
              Prestadores
            </Button>
            <Button
              variant={activeSection === "empresas" ? "default" : "outline"}
              onClick={() => onSectionChange("empresas")}
              className="font-medium"
            >
              Empresas
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-foreground hover:text-primary hover:bg-muted"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in">
            <div className="flex gap-2 mb-4">
              <Button
                variant={activeSection === "prestadores" ? "default" : "outline"}
                onClick={() => onSectionChange("prestadores")}
                className="flex-1 font-medium"
                size="sm"
              >
                Prestadores
              </Button>
              <Button
                variant={activeSection === "empresas" ? "default" : "outline"}
                onClick={() => onSectionChange("empresas")}
                className="flex-1 font-medium"
                size="sm"
              >
                Empresas
              </Button>
            </div>
            {currentLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
