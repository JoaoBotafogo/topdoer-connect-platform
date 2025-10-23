import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import cleaningTeamHero from "@/assets/cleaning-team-hero.jpg";

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
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-hero bg-clip-text text-transparent">
              Oportunidades reais, com a segurança que você precisa.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Nós te conectamos com grandes empresas, para que você trabalhe com flexibilidade, segurança e tenha a garantia de receber em dia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg font-semibold group"
                onClick={() => window.open('https://wa.me/5511943667777?text=Para%20come%C3%A7ar%2C%20envie%20qualquer%20mensagem%20%5BSite%5D', '_blank')}
              >
                Encontrar Oportunidades
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
                <div className="text-3xl font-bold text-primary">+100.000</div>
                <div className="text-sm text-muted-foreground">Tarefas concluídas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24h</div>
                <div className="text-sm text-muted-foreground">Pagamentos em até</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">R$ 500</div>
                <div className="text-sm text-muted-foreground">Ganhos por turno*</div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground pt-2">
              *dependendo da função e da sua performance. Algumas funções não possuem teto de ganhos.
            </p>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-3xl opacity-20" />
            <img
              src={cleaningTeamHero}
              alt="Equipe de profissionais de limpeza"
              className="relative rounded-3xl shadow-elevated w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
