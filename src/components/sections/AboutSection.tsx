import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedElements';
import { Target, Eye, Heart } from 'lucide-react';

export const AboutSection = () => {
  const values = [
    'Ética e transparência',
    'Criatividade',
    'Inovação contínua',
    'Foco no cliente',
    'Trabalho em equipa',
    'Responsabilidade social',
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* About Text */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <AnimatedSection>
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
              Sobre a Vimark
            </span>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Criamos marcas fortes, estratégias inteligentes e{' '}
              <span className="text-gradient">resultados reais</span>
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A Vimark Comunicação e Marketing é uma consultoria angolana fundada em 2020, 
              especializada em branding, marketing digital e identidade visual. Atua com soluções 
              criativas, estratégicas e tecnológicas para empresas que desejam fortalecer a sua 
              imagem, aumentar visibilidade e gerar resultados sustentáveis.
            </p>
          </AnimatedSection>
        </div>

        {/* Mission, Vision, Values Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <AnimatedSection delay={0.3} direction="up">
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 h-full group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ajudar empresas a construir e fortalecer suas marcas com soluções criativas, 
                inovadoras e tecnológicas.
              </p>
            </motion.div>
          </AnimatedSection>

          {/* Vision */}
          <AnimatedSection delay={0.4} direction="up">
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-secondary rounded-2xl p-8 shadow-lg h-full group"
            >
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-secondary-foreground mb-4">Visão</h3>
              <p className="text-secondary-foreground/80 leading-relaxed">
                Ser referência em branding e marketing digital em Angola.
              </p>
            </motion.div>
          </AnimatedSection>

          {/* Values */}
          <AnimatedSection delay={0.5} direction="up">
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 h-full group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">Valores</h3>
              <div className="flex flex-wrap gap-2">
                {values.map((value, index) => (
                  <motion.span
                    key={value}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full"
                  >
                    {value}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
