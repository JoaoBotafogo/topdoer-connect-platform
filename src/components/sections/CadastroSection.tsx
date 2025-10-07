import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  "Cadastro 100% gratuito",
  "Acesso a milhares de oportunidades",
  "Pagamentos seguros e rápidos",
  "Suporte dedicado 24/7",
];

export const CadastroSection = () => {
  const handleCadastro = () => {
    // TODO: Implementar lógica de cadastro
    console.log("Cadastro iniciado");
  };

  return (
    <section id="cadastro" className="py-20">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-hero text-white shadow-elevated animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Comece Sua Jornada Hoje
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Junte-se a milhares de prestadores que já estão transformando suas carreiras com a TopDoer
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="w-6 h-6 flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg font-semibold bg-white text-primary hover:bg-white/90 group"
              onClick={handleCadastro}
            >
              Cadastrar Agora
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <p className="text-center mt-6 text-sm opacity-75">
            Sem taxas ocultas • Cancele quando quiser • 100% gratuito
          </p>
        </Card>
      </div>
    </section>
  );
};
