import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedElements';
import { 
  Share2, Palette, Megaphone, TrendingUp, Video, 
  GraduationCap, MessageSquare, ArrowRight
} from 'lucide-react';

const services = [
  { 
    icon: Share2, 
    title: 'Gestão de Redes Sociais', 
    desc: 'Estratégias para aumentar o engajamento, alcance e conversão nas plataformas digitais.',
    color: 'bg-blue-50 text-blue-600'
  },
  { 
    icon: Palette, 
    title: 'Design Gráfico e Branding', 
    desc: 'Identidade visual que comunica a essência da sua marca de forma impactante.',
    color: 'bg-purple-50 text-purple-600'
  },
  { 
    icon: Megaphone, 
    title: 'Campanhas Publicitárias', 
    desc: 'Campanhas criativas com resultados mensuráveis para Meta e Google Ads.',
    color: 'bg-green-50 text-green-600'
  },
  { 
    icon: TrendingUp, 
    title: 'Consultoria em Marketing', 
    desc: 'Estratégias personalizadas para acelerar o crescimento do seu negócio.',
    color: 'bg-orange-50 text-orange-600'
  },
  { 
    icon: Video, 
    title: 'Produção Audiovisual', 
    desc: 'Conteúdo visual de alta qualidade que conecta com o seu público.',
    color: 'bg-red-50 text-red-600'
  },
  { 
    icon: GraduationCap, 
    title: 'Workshops e Formações', 
    desc: 'Capacitação especializada em marketing e comunicação para equipas.',
    color: 'bg-teal-50 text-teal-600'
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-muted/30 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wider uppercase mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              Nossos Serviços
              <span className="w-8 h-0.5 bg-primary" />
            </span>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
              Soluções Completas para sua Marca
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground">
              Da estratégia à execução, oferecemos tudo que sua empresa precisa para se destacar no mercado angolano e internacional.
            </p>
          </AnimatedSection>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={0.1 * index} direction="up">
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-card rounded-2xl p-6 shadow-sm border border-border h-full group card-hover cursor-pointer"
              >
                <div className={`feature-icon mb-5 ${service.color}`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-heading font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.desc}
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all"
                >
                  Saber Mais
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Banner */}
        <AnimatedSection delay={0.6}>
          <div className="mt-16 bg-primary rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-2">
                  Explore Mais Serviços
                </h3>
                <p className="text-primary-foreground/80">
                  Descubra como podemos transformar a presença digital da sua empresa.
                </p>
              </div>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                className="bg-white text-primary px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow flex-shrink-0"
              >
                Falar com Especialista
              </motion.a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
