import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
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
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">V</span>
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-secondary-foreground">Vimark</span>
                <span className="text-xs text-secondary-foreground/60 block -mt-1">Comunicação e Marketing</span>
              </div>
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-6">
              Criamos marcas fortes, estratégias inteligentes e resultados reais.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -4, scale: 1.1 }}
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
              <h4 className="font-heading font-semibold text-secondary-foreground mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-secondary-foreground/60">
              © {new Date().getFullYear()} Vimark Comunicação e Marketing. Todos os direitos reservados.
            </p>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -4 }}
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
