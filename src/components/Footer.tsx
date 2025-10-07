export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
              TopDoer
            </h3>
            <p className="text-muted-foreground max-w-md">
              A plataforma que conecta prestadores de serviço talentosos com empresas que precisam deles.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Para Prestadores</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#como-funciona" className="hover:text-primary transition-colors">Como Funciona</a></li>
              <li><a href="#vantagens" className="hover:text-primary transition-colors">Vantagens</a></li>
              <li><a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a></li>
              <li><a href="#cadastro" className="hover:text-primary transition-colors">Cadastrar</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Para Empresas</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#beneficios" className="hover:text-primary transition-colors">Benefícios</a></li>
              <li><a href="#demo" className="hover:text-primary transition-colors">Solicitar Demo</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TopDoer. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
