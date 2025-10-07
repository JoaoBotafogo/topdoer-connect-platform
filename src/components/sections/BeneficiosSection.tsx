import { Zap, Users, Award, BarChart, Shield, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Zap,
    title: "Contratação Rápida",
    description: "Encontre e contrate profissionais qualificados em questão de horas, não dias.",
  },
  {
    icon: Users,
    title: "Talentos Verificados",
    description: "Todos os prestadores passam por rigorosa verificação de identidade e habilidades.",
  },
  {
    icon: Award,
    title: "Qualidade Garantida",
    description: "Sistema de avaliações e garantia de qualidade em todos os serviços prestados.",
  },
  {
    icon: BarChart,
    title: "Redução de Custos",
    description: "Economize até 40% em custos operacionais com nossa solução inteligente.",
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Contratos digitais, pagamentos seguros e proteção jurídica completa.",
  },
  {
    icon: Clock,
    title: "Suporte 24/7",
    description: "Equipe dedicada disponível para ajudar sua empresa a qualquer momento.",
  },
];

export const BeneficiosSection = () => {
  return (
    <section id="beneficios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            Benefícios para Empresas
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-4">
            Por Que Empresas Escolhem TopDoer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Otimize sua operação com a plataforma mais completa de contratação de prestadores
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-accent flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
