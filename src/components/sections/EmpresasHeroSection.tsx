import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import businessManagerHero from "@/assets/business-manager-hero.jpg";

export const EmpresasHeroSection = () => {
  return (
    <section id="empresas-hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-accent opacity-10" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">
                Solução para Empresas
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Sua equipe sob demanda,
              </span>
              {" "}25% mais eficiente.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Contrate profissionais verificados e reduza custos operacionais sem a burocracia contratual. Mais agilidade e segurança para sua marca.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg font-semibold group"
                asChild
              >
                <a href="https://wa.me/5511943667777?text=Para%20come%C3%A7ar%2C%20envie%20qualquer%20mensagem%20%5BSite%5D" target="_blank" rel="noopener noreferrer">
                  Otimizar minha operação
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg font-semibold"
                onClick={() => document.getElementById("beneficios")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver Benefícios
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-secondary">98%</div>
                <div className="text-sm text-muted-foreground">de satisfação</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">-25%</div>
                <div className="text-sm text-muted-foreground">de custos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">24h</div>
                <div className="text-sm text-muted-foreground">de respostas</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-3xl opacity-20" />
            <img
              src={businessManagerHero}
              alt="Gerente contratando serviços de limpeza"
              className="relative rounded-3xl shadow-elevated w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
