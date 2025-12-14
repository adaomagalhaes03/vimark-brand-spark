import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin, ArrowUp } from 'lucide-react';
import logoVimark from '@/assets/logo-vimark.png';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const footerLinks = [
  {
    title: 'Empresa',
    links: ['Sobre Nós', 'Equipa', 'Carreiras', 'Contato'],
  },
  {
    title: 'Serviços',
    links: ['Branding', 'Marketing Digital', 'Design Gráfico', 'Consultoria'],
  },
  {
    title: 'Legal',
    links: ['Privacidade', 'Termos de Uso', 'Cookies'],
  },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <img 
              src={logoVimark} 
              alt="Vimark Comunicação e Marketing" 
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-6 max-w-sm">
              Criamos marcas fortes, estratégias inteligentes e resultados reais para empresas que desejam crescer no mercado angolano.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -4 }}
                  className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-secondary-foreground/70 group-hover:text-primary-foreground transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-heading font-semibold text-secondary-foreground mb-4 text-sm">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-secondary-foreground/50">
              © {new Date().getFullYear()} Vimark Comunicação e Marketing. Todos os direitos reservados.
            </p>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              className="flex items-center gap-2 text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
            >
              Voltar ao topo
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};
