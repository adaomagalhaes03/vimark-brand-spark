import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedElements';
import { Linkedin, Mail } from 'lucide-react';

import teamMember1 from '@/assets/team-member-1.png';
import teamMember2 from '@/assets/team-member-2.png';
import teamMember3 from '@/assets/team-member-3.png';
import teamMember4 from '@/assets/team-member-4.png';
import teamMember5 from '@/assets/team-member-5.png';

const teamMembers = [
  {
    name: 'Carlos Mendes',
    role: 'Diretor Geral',
    image: teamMember1,
    bio: 'Líder visionário com mais de 10 anos de experiência em marketing e branding.',
  },
  {
    name: 'Ana Silva',
    role: 'Diretora Executiva',
    image: teamMember2,
    bio: 'Especialista em gestão de projetos e estratégia empresarial.',
  },
  {
    name: 'Pedro Santos',
    role: 'Diretor de Projetos',
    image: teamMember3,
    bio: 'Consultor sénior em branding corporativo e comunicação.',
  },
  {
    name: 'Maria Costa',
    role: 'Gestora de Marketing',
    image: teamMember4,
    bio: 'Criativa e inovadora, especialista em campanhas digitais.',
  },
  {
    name: 'João Ferreira',
    role: 'Gestor de TI',
    image: teamMember5,
    bio: 'Expert em tecnologia e soluções digitais para negócios.',
  },
];

export const TeamMembersSection = () => {
  return (
    <section id="team" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimatedSection>
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
              Nossa Equipa
            </span>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Conheça os{' '}
              <span className="text-gradient">profissionais</span>
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-muted-foreground">
              Uma equipa multidisciplinar dedicada a transformar a sua marca.
            </p>
          </AnimatedSection>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={member.name} delay={0.1 * index}>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border group"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex gap-3">
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        className="w-10 h-10 bg-background rounded-full flex items-center justify-center text-foreground hover:text-primary transition-colors"
                      >
                        <Linkedin size={18} />
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        className="w-10 h-10 bg-background rounded-full flex items-center justify-center text-foreground hover:text-primary transition-colors"
                      >
                        <Mail size={18} />
                      </motion.a>
                    </div>
                  </div>
                </div>
                
                {/* Info */}
                <div className="p-5 text-center">
                  <h3 className="font-heading font-bold text-foreground text-lg mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-2">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
