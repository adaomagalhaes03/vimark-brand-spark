import { motion } from 'framer-motion';
import { AnimatedSection, AnimatedCounter } from '@/components/ui/AnimatedElements';
import { Users, Shield, Zap, Award } from 'lucide-react';
import teamMeeting from '@/assets/team-meeting.png';
import businessMan from '@/assets/business-man.png';

const features = [
  { icon: Users, title: 'Parceiro de Confiança', desc: 'Trabalhamos lado a lado com os nossos clientes.' },
  { icon: Zap, title: 'Plataforma Ágil', desc: 'Processos rápidos e resultados eficientes.' },
  { icon: Award, title: 'Qualidade Garantida', desc: 'Padrões elevados em todos os projetos.' },
];

const stats = [
  { value: 50, suffix: '+', label: 'Colaboradores' },
  { value: 3, suffix: '+', label: 'Anos de Experiência' },
  { value: 100, suffix: '+', label: 'Projetos Realizados' },
  { value: 30, suffix: '%', label: 'Crescimento Anual' },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Images */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <img 
                    src={teamMeeting} 
                    alt="Equipa Vimark" 
                    className="rounded-2xl shadow-lg w-full h-64 object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative mt-8"
                >
                  <img 
                    src={businessMan} 
                    alt="Profissional Vimark" 
                    className="rounded-2xl shadow-lg w-full h-64 object-cover"
                  />
                </motion.div>
              </div>

              {/* Stats Card Overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold">
                    <AnimatedCounter end={100} suffix="+" />
                  </div>
                  <div className="text-sm text-primary-foreground/80">Clientes Satisfeitos</div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Right - Content */}
          <div>
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                <span className="w-8 h-0.5 bg-primary" />
                Sobre a Empresa
              </span>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">
                Somos a Melhor Agência de Marketing e Branding de Angola
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <p className="text-muted-foreground leading-relaxed mb-8">
                A Vimark Comunicação e Marketing é uma consultoria angolana fundada em 2020, 
                especializada em branding, marketing digital e identidade visual. Atuamos com 
                soluções criativas, estratégicas e tecnológicas para empresas que desejam 
                fortalecer a sua imagem, aumentar visibilidade e gerar resultados sustentáveis.
              </p>
            </AnimatedSection>

            {/* Features */}
            <div className="space-y-5">
              {features.map((feature, index) => (
                <AnimatedSection key={feature.title} delay={0.3 + index * 0.1} direction="right">
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="feature-icon group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-secondary mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-20 pt-12 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={0.1 * index}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
