import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import businessTeam from "@/assets/business-team.jpg";

export const EmpresasHeroSection = () => {
  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

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
              Encontre os melhores{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                profissionais
              </span>
              {" "}para sua empresa
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Conecte-se com prestadores de serviço qualificados e verificados. 
              Contrate com agilidade, segurança e eficiência.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg font-semibold group"
                onClick={scrollToDemo}
              >
                Solicitar Demonstração
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
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
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">-40%</div>
                <div className="text-sm text-muted-foreground">Custos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">24h</div>
                <div className="text-sm text-muted-foreground">Resposta</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-3xl opacity-20" />
            <img
              src={businessTeam}
              alt="Equipe de negócios profissional"
              className="relative rounded-3xl shadow-elevated w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
