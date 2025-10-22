import { Zap, Users, Award, BarChart, Shield, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Users,
    title: "Equipe sob Demanda",
    description: "Você define a necessidade: quando, qual a função e quantos profissionais. Nós fornecemos uma equipe flexível para cobrir suas operações diárias. Ideal para picos sazonais e demandas inesperadas.",
  },
  {
    icon: Zap,
    title: "Contratação Rápida",
    description: "Não deixe seus projetos parados por falta de equipe. Encontre e contrate o profissional ideal em tempo recorde, sem inúmeras burocracias e acelere sua operação.",
  },
  {
    icon: Shield,
    title: "Contrate com Total Confiança",
    description: "Chega de incertezas. Nossa equipe valida a identidade, as habilidades e o histórico de cada profissional. Você contrata sabendo que está trazendo os melhores para o seu time.",
  },
  {
    icon: Award,
    title: "Qualidade Garantida",
    description: "Acompanhe as avaliações de outros clientes e conte com a nossa garantia de qualidade. Seus projetos serão entregues com a excelência que sua marca exige.",
  },
  {
    icon: BarChart,
    title: "Redução de Custos",
    description: "Economize até 35% em custos operacionais com nossa solução inteligente.",
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Deixe a papelada com a gente. Gerenciamos os contratos, garantimos os pagamentos e protegemos sua segurança jurídica. Mais proteção para sua empresa, menos dor de cabeça para você.",
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
            Por Que Empresas Escolhem TopDoer?
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
