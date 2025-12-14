import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedElements';
import { 
  LayoutDashboard, BarChart2, FileText, Users, Clock 
} from 'lucide-react';

const features = [
  { icon: LayoutDashboard, title: 'Gestão de Projetos', desc: 'Acompanhe todos os seus projetos em tempo real' },
  { icon: BarChart2, title: 'Monitorização de Campanhas', desc: 'Métricas e KPIs atualizados constantemente' },
  { icon: FileText, title: 'Relatórios Automáticos', desc: 'Relatórios personalizados e exportáveis' },
  { icon: Users, title: 'Integração entre Setores', desc: 'Comunicação fluida entre todas as equipas' },
  { icon: Clock, title: 'Controle de Prazos', desc: 'Gestão eficiente de deadlines e entregas' },
];

export const TechnologySection = () => {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20" />
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <AnimatedSection>
              <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                Tecnologia
              </span>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-foreground mb-6">
                <span className="text-primary">BrandSync</span> — Nossa Plataforma Exclusiva
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <p className="text-lg text-secondary-foreground/70 mb-8 leading-relaxed">
                Uma plataforma desenvolvida internamente para garantir eficiência, 
                transparência e resultados excepcionais em cada projeto.
              </p>
            </AnimatedSection>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <AnimatedSection key={feature.title} delay={0.3 + index * 0.1} direction="left">
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-secondary-foreground/5 hover:bg-primary/10 transition-colors cursor-pointer group"
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                      <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-secondary-foreground mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-secondary-foreground/60">
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Visual */}
          <AnimatedSection delay={0.4} direction="right">
            <div className="relative">
              {/* Dashboard Mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-card/10 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl"
              >
                {/* Header */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-4 text-sm text-white/40">BrandSync Dashboard</span>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: 'Projetos Ativos', value: '24' },
                    { label: 'Campanhas', value: '12' },
                    { label: 'Taxa de Sucesso', value: '97%' },
                    { label: 'Leads Gerados', value: '1.2K' },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/5 rounded-xl p-4"
                    >
                      <div className="text-2xl font-heading font-bold text-primary mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-white/50">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Chart Placeholder */}
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-end gap-2 h-32">
                    {[40, 60, 45, 80, 55, 70, 90, 65, 85, 75, 95, 88].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        transition={{ delay: 0.8 + i * 0.05, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex-1 bg-gradient-to-t from-primary to-primary/50 rounded-t"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-8 -right-8 bg-primary rounded-2xl p-4 shadow-lg shadow-primary/30"
              >
                <BarChart2 className="w-8 h-8 text-primary-foreground" />
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
