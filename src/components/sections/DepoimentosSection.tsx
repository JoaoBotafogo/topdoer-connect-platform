import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Eletricista",
    text: "A TopDoer transformou minha carreira! Consegui triplicar minha renda mensal trabalhando com flexibilidade total. Recomendo muito!",
    rating: 5,
  },
  {
    name: "Ana Paula Costa",
    role: "Designer Gráfica",
    text: "Plataforma incrível! Encontrei vários projetos interessantes e o processo de pagamento é super seguro. Estou muito satisfeita.",
    rating: 5,
  },
  {
    name: "Roberto Fernandes",
    role: "Desenvolvedor",
    text: "Melhor decisão que tomei foi me cadastrar. Trabalho nos meus horários e escolho os projetos que mais me interessam. Perfeito!",
    rating: 5,
  },
];

export const DepoimentosSection = () => {
  return (
    <section id="depoimentos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-4">
            O Que Nossos Prestadores Dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira a experiência de quem já está transformando sua carreira com a TopDoer
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
