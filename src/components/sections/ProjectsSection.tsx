import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedElements';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

const projects = [
  {
    title: 'Morvan Agência de Viagem',
    category: 'Rebranding',
    description: 'Rebranding completo resultando em aumento significativo de agendamentos e reconhecimento de marca.',
    result: 'Aumento de agendamentos',
    color: 'from-orange-500/20 to-amber-500/20',
  },
  {
    title: 'Tio Lucas Produtos Agrícolas',
    category: 'Branding & Estratégia',
    description: 'Estratégia de branding completa e posicionamento de mercado para crescimento sustentável da marca.',
    result: 'Crescimento da marca',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Restaurante Senegalês',
    category: 'Reposicionamento',
    description: 'Reposicionamento estratégico com foco em comidas saudáveis, resultando em aumento expressivo de reservas.',
    result: 'Aumento de reservas',
    color: 'from-red-500/20 to-rose-500/20',
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimatedSection>
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
              Projetos e Casos de Sucesso
            </span>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Resultados que{' '}
              <span className="text-gradient">falam por si</span>
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-muted-foreground">
              Conheça alguns dos projetos que transformaram negócios e fortaleceram marcas.
            </p>
          </AnimatedSection>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={0.3 + index * 0.15} direction="up">
              <motion.div
                whileHover={{ y: -12 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer h-full"
              >
                <div className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border/50 h-full flex flex-col hover:shadow-2xl transition-shadow duration-300">
                  {/* Image Placeholder with Gradient */}
                  <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-secondary/20" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-secondary/90 text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>

                    {/* Arrow Icon */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="absolute bottom-4 right-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>

                    {/* Result */}
                    <div className="flex items-center gap-2 pt-4 border-t border-border">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{project.result}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
