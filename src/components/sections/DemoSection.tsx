import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Building2, Mail, Phone, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const DemoSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.company || !formData.phone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos do formulário.",
        variant: "destructive",
      });
      return;
    }

    // TODO: Implementar lógica de envio
    console.log("Formulário enviado:", formData);
    
    toast({
      title: "Solicitação enviada!",
      description: "Nossa equipe entrará em contato em breve.",
    });

    // Limpar formulário
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
    });
  };

  return (
    <section id="demo" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Solicite mais informações
            </h2>
            <p className="text-lg text-muted-foreground">
              Preencha seus dados e um de nossos especialistas irá preparar uma análise de como a TopDoer pode reduzir seus custos e agilizar sua contratação.
            </p>
          </div>

          <Card className="p-8 md:p-10 shadow-elevated animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Nome Completo *
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Corporativo *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Nome da Empresa *
                </label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Sua empresa"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="h-12"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Telefone *
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-lg font-semibold h-14"
              >
                Otimize minha operação
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Ao enviar este formulário, você concorda em ser contatado pela TopDoer.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
