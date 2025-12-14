import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedElements';
import { Target, Eye, Heart, Lightbulb, Users, Shield } from 'lucide-react';

const values = [
  { icon: Shield, name: 'Ética e Transparência' },
  { icon: Lightbulb, name: 'Criatividade' },
  { icon: Target, name: 'Inovação Contínua' },
  { icon: Users, name: 'Foco no Cliente' },
  { icon: Heart, name: 'Trabalho em Equipa' },
  { icon: Eye, name: 'Responsabilidade Social' },
];

export const MissionSection = () => {
  return (
    <section className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border-2 border-white rounded-full" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Mission */}
          <AnimatedSection delay={0.1}>
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full"
            >
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Missão</h3>
              <p className="text-secondary-foreground/80 leading-relaxed">
                Ajudar empresas a construir e fortalecer suas marcas com soluções criativas, inovadoras e tecnológicas que geram resultados sustentáveis.
              </p>
            </motion.div>
          </AnimatedSection>

          {/* Vision */}
          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-primary rounded-2xl p-8 h-full"
            >
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-4">Visão</h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                Ser a referência em branding e marketing digital em Angola, reconhecida pela excelência, criatividade e impacto positivo nos negócios dos nossos clientes.
              </p>
            </motion.div>
          </AnimatedSection>

          {/* Values */}
          <AnimatedSection delay={0.3}>
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full"
            >
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Valores</h3>
              <div className="flex flex-wrap gap-2">
                {values.map((value) => (
                  <span
                    key={value.name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 text-secondary-foreground text-sm rounded-full"
                  >
                    <value.icon className="w-3.5 h-3.5" />
                    {value.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
