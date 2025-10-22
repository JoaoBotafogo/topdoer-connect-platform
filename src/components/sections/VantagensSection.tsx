import { Clock, TrendingUp, Shield, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const advantages = [
  {
    icon: Clock,
    title: "Flexibilidade Total",
    description: "Você decide os melhores turnos para a sua rotina. Perfeito para complementar sua renda ou conciliar com seu emprego fixo, sem pressão e do seu jeito.",
    color: "text-blue-500",
  },
  {
    icon: TrendingUp,
    title: "Pagamento rápido via PIX",
    description: "Os pagamentos são feitos com base nos seus resultados em até 24 horas por meio de transferência PIX.",
    color: "text-green-500",
  },
  {
    icon: Shield,
    title: "Segurança e Confiança",
    description: "Seu pagamento é garantido e todas as empresas são verificadas. Foque no seu trabalho, que da segurança a gente cuida.",
    color: "text-purple-500",
  },
  {
    icon: Heart,
    title: "Suporte Dedicado",
    description: "Nossa equipe está sempre disponível para ajudar. Conte com suporte rápido e eficiente em todas as etapas.",
    color: "text-red-500",
  },
];

export const VantagensSection = () => {
  return (
    <section id="vantagens" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            Por Que Ser um TopDoer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-4">
            Por que ser um TopDoer?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra todos os benefícios de fazer parte da maior plataforma de prestadores de serviço
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center ${advantage.color}`}>
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
