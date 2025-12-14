import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedElements';
import { 
  UserCircle, Briefcase, FolderKanban, Wallet, 
  Megaphone, PenTool, HeadphonesIcon, MonitorSmartphone 
} from 'lucide-react';

const orgStructure = [
  { icon: UserCircle, title: 'Diretor Geral', level: 1 },
  { icon: Briefcase, title: 'Diretor Executivo', level: 1 },
  { icon: FolderKanban, title: 'Diretor de Projetos e Consultoria', level: 2 },
  { icon: Wallet, title: 'Gestor Financeiro e Administrativo', level: 2 },
  { icon: Megaphone, title: 'Gestor de Marketing e Comunicação', level: 2 },
  { icon: PenTool, title: 'Designers', level: 3 },
  { icon: HeadphonesIcon, title: 'Consultores', level: 3 },
  { icon: MonitorSmartphone, title: 'Gestor de TI e Suporte Técnico', level: 3 },
];

export const TeamSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimatedSection>
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
              Estrutura Organizacional
            </span>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Uma equipa{' '}
              <span className="text-gradient">multidisciplinar</span>
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-muted-foreground">
              Profissionais especializados trabalhando juntos para entregar resultados excepcionais.
            </p>
          </AnimatedSection>
        </div>

        {/* Org Chart */}
        <div className="max-w-4xl mx-auto">
          {/* Level 1 */}
          <div className="flex justify-center gap-6 mb-8">
            {orgStructure.filter(item => item.level === 1).map((item, index) => (
              <AnimatedSection key={item.title} delay={0.3 + index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="bg-secondary rounded-2xl p-6 text-center shadow-lg min-w-[200px]"
                >
                  <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-heading font-semibold text-secondary-foreground">
                    {item.title}
                  </h4>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Connector Line */}
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-0.5 h-8 bg-border origin-top"
            />
          </div>

          {/* Level 2 */}
          <div className="flex justify-center gap-4 flex-wrap mb-8">
            {orgStructure.filter(item => item.level === 2).map((item, index) => (
              <AnimatedSection key={item.title} delay={0.5 + index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="bg-card border border-border rounded-2xl p-5 text-center shadow-md min-w-[180px]"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-heading font-semibold text-foreground text-sm">
                    {item.title}
                  </h4>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Connector Line */}
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-0.5 h-8 bg-border origin-top"
            />
          </div>

          {/* Level 3 */}
          <div className="flex justify-center gap-4 flex-wrap">
            {orgStructure.filter(item => item.level === 3).map((item, index) => (
              <AnimatedSection key={item.title} delay={0.7 + index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="bg-muted rounded-xl p-4 text-center min-w-[150px]"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-heading font-medium text-foreground text-sm">
                    {item.title}
                  </h4>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
