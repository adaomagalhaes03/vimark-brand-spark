import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AnimatedCounter } from '@/components/ui/AnimatedElements';
import { Users, Clock, FolderCheck, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Users, value: 50, suffix: '+', label: 'Colaboradores' },
  { icon: Clock, value: 3, suffix: '+', label: 'Anos de Experiência' },
  { icon: FolderCheck, value: 100, suffix: '+', label: 'Projetos Realizados' },
  { icon: TrendingUp, value: 30, suffix: '%+', label: 'Crescimento Anual' },
];

export const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-secondary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <stat.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-secondary-foreground/70 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
