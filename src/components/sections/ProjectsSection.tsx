import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedElements';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

const projects = [
  {
    title: 'Morvan Agência de Viagem',
    category: 'Rebranding',
    description: 'Rebranding completo resultando em aumento significativo de agendamentos e reconhecimento de marca no mercado angolano.',
    result: '+45% Agendamentos',
    gradient: 'from-orange-400 to-amber-500',
  },
  {
    title: 'Tio Lucas Produtos Agrícolas',
    category: 'Branding & Estratégia',
    description: 'Estratégia de branding completa e posicionamento de mercado para crescimento sustentável da marca.',
    result: '+60% Vendas',
    gradient: 'from-green-400 to-emerald-500',
  },
  {
    title: 'Restaurante Senegalês',
    category: 'Reposicionamento',
    description: 'Reposicionamento estratégico com foco em comidas saudáveis, resultando em aumento expressivo de reservas.',
    result: '+80% Reservas',
    gradient: 'from-red-400 to-rose-500',
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-muted/30 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wider uppercase mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              Casos de Sucesso
              <span className="w-8 h-0.5 bg-primary" />
            </span>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
              Resultados que Falam por Si
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground">
              Conheça alguns dos projetos que transformaram negócios e fortaleceram marcas em Angola.
            </p>
          </AnimatedSection>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={0.2 + index * 0.1} direction="up">
              <motion.div
                whileHover={{ y: -8 }}
                className="group cursor-pointer h-full"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border h-full flex flex-col card-hover">
                  {/* Image Placeholder with Gradient */}
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-secondary px-3 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>

                    {/* Arrow Icon */}
                    <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                      <ArrowUpRight className="w-5 h-5 text-secondary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-heading font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>

                    {/* Result */}
                    <div className="flex items-center gap-2 pt-4 border-t border-border">
                      <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-semibold text-primary">{project.result}</span>
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
