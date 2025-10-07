import { UserPlus, Search, Briefcase, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    icon: UserPlus,
    title: "1. Cadastre-se",
    description: "Crie sua conta gratuita em menos de 5 minutos. Adicione suas habilidades e experiências.",
  },
  {
    icon: Search,
    title: "2. Encontre Oportunidades",
    description: "Navegue por diversos trabalhos disponíveis que combinam com seu perfil e localização.",
  },
  {
    icon: Briefcase,
    title: "3. Trabalhe com Flexibilidade",
    description: "Escolha seus horários e projetos. Trabalhe quando e onde quiser com total autonomia.",
  },
  {
    icon: DollarSign,
    title: "4. Receba seus Pagamentos",
    description: "Pagamentos seguros e rápidos direto na sua conta. Acompanhe seus ganhos em tempo real.",
  },
];

export const ComoFuncionaSection = () => {
  return (
    <section id="como-funciona" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">
            Processo Simples
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-4">
            Como Funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Em apenas 4 passos você está pronto para começar a trabalhar e ganhar dinheiro
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
