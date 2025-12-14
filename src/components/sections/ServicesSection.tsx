import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedElements';
import { 
  Share2, Palette, Megaphone, TrendingUp, Video, 
  GraduationCap, Presentation, User, BarChart3, 
  Building2, Target, Search, MessageSquare, Calendar
} from 'lucide-react';

const mainServices = [
  { icon: Share2, title: 'Gestão de Redes Sociais', desc: 'Estratégias para aumentar o engajamento e alcance' },
  { icon: Palette, title: 'Design Gráfico e Branding', desc: 'Identidade visual que marca presença' },
  { icon: Megaphone, title: 'Campanhas Publicitárias', desc: 'Campanhas criativas com resultados mensuráveis' },
  { icon: TrendingUp, title: 'Consultoria em Marketing Digital', desc: 'Estratégias personalizadas para crescimento' },
  { icon: Video, title: 'Produção Audiovisual', desc: 'Conteúdo visual de alta qualidade' },
  { icon: GraduationCap, title: 'Coaching e Mentoria', desc: 'Desenvolvimento de líderes e equipas' },
  { icon: Presentation, title: 'Workshops e Palestras', desc: 'Formação especializada em marketing' },
  { icon: User, title: 'Branding Pessoal', desc: 'Construção de marca pessoal de impacto' },
];

const specializations = [
  { icon: BarChart3, title: 'Marketing Estratégico' },
  { icon: Building2, title: 'Branding Corporativo' },
  { icon: Target, title: 'Tráfego Pago (Meta & Google Ads)' },
  { icon: Search, title: 'SEO e Marketing de Conteúdo' },
  { icon: MessageSquare, title: 'Comunicação Empresarial' },
  { icon: Calendar, title: 'Eventos Corporativos' },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimatedSection>
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
              Nossos Serviços
            </span>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Soluções completas para sua{' '}
              <span className="text-gradient">marca crescer</span>
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-muted-foreground">
              Da estratégia à execução, oferecemos tudo que sua empresa precisa para se destacar no mercado.
            </p>
          </AnimatedSection>
        </div>

        {/* Main Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mainServices.map((service, index) => (
            <AnimatedSection key={service.title} delay={0.1 * index} direction="up">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-2xl p-6 shadow-md border border-border/50 h-full group cursor-pointer hover:shadow-xl hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Specializations */}
        <AnimatedSection delay={0.5}>
          <div className="bg-secondary rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-heading font-bold text-secondary-foreground mb-8 text-center">
              Especializações
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {specializations.map((spec, index) => (
                <motion.div
                  key={spec.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-secondary-foreground/5 rounded-xl p-4 text-center group cursor-pointer hover:bg-primary/20 transition-all duration-300"
                >
                  <spec.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <span className="text-sm font-medium text-secondary-foreground/90">
                    {spec.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
