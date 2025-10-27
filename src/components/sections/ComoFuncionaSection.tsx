import { UserPlus, Search, Briefcase, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import workerSmartphoneWithLogo from "@/assets/worker-smartphone-with-logo.jpg";
import paymentSuccess from "@/assets/payment-success.jpg";

const steps = [
  {
    icon: UserPlus,
    title: "1. Crie seu Perfil",
    description: (
      <>
        Cadastre-se entrando em contato pelo WhatsApp{" "}
        <a 
          href="https://wa.me/5511943667777?text=Para%20come%C3%A7ar%2C%20envie%20qualquer%20mensagem%20%5BSite%5D" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:underline font-semibold"
        >
          +55 11 94366-7777
        </a>
        . Nossa equipe de suporte responde suas dúvidas e orienta nos próximos passos.
      </>
    ),
  },
  {
    icon: Search,
    title: "2. Encontre Oportunidades",
    description: "Nós encontramos o serviço certo para você. Receba oportunidades perto de casa, selecionadas de acordo com suas habilidades. Você só precisa escolher os que se encaixam na sua rotina.",
  },
  {
    icon: Briefcase,
    title: "3. Trabalhe com Flexibilidade",
    description: "Aqui você é o chefe. Escolha o que quer fazer, defina seus horários e trabalhe no seu ritmo. Liberdade total para você.",
  },
  {
    icon: DollarSign,
    title: "4. Receba via PIX",
    description: "Dinheiro na conta, sem enrolação. Pagamentos seguros e rápidos direto na sua conta, sem riscos!",
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
            Em 4 passos simples, você começa a trabalhar com liberdade e recebe por isso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
              <div className="text-muted-foreground">{step.description}</div>
            </Card>
          ))}
        </div>

        {/* Visual Examples */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
          <div className="relative group overflow-hidden rounded-3xl shadow-elevated">
            <img
              src={workerSmartphoneWithLogo}
              alt="Profissional usando smartphone com app TopDoer"
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </div>
          <div className="relative group overflow-hidden rounded-3xl shadow-elevated">
            <img
              src={paymentSuccess}
              alt="Profissional recebendo pagamento via PIX"
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};