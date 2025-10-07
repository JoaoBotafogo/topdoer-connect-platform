import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroWorker from "@/assets/hero-worker.jpg";

export const HeroSection = () => {
  const scrollToCadastro = () => {
    document.getElementById("cadastro")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Plataforma para Prestadores
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transforme seu talento em{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                oportunidades reais
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Conecte-se com empresas que precisam dos seus serviços. 
              Trabalhe com flexibilidade, autonomia e ganhe mais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg font-semibold group"
                onClick={scrollToCadastro}
              >
                Começar Agora
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg font-semibold"
                onClick={() => document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth" })}
              >
                Como Funciona
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">5.000+</div>
                <div className="text-sm text-muted-foreground">Prestadores</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">1.200+</div>
                <div className="text-sm text-muted-foreground">Empresas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">4.9★</div>
                <div className="text-sm text-muted-foreground">Avaliação</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-3xl opacity-20" />
            <img
              src={heroWorker}
              alt="Prestador de serviço profissional"
              className="relative rounded-3xl shadow-elevated w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
