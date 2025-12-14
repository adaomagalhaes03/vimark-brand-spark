import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedElements';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap, Crown } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    icon: Zap,
    description: 'Ideal para pequenas empresas iniciantes',
    features: [
      'Identidade visual básica',
      'Gestão de 2 redes sociais',
      '8 posts mensais',
      'Relatório mensal básico',
      'Suporte por email',
    ],
    highlighted: false,
    color: 'primary',
  },
  {
    name: 'Growth',
    icon: Star,
    description: 'Para empresas em crescimento',
    features: [
      'Branding completo',
      'Gestão de 4 redes sociais',
      '16 posts mensais',
      'Campanhas de tráfego pago',
      'Relatórios semanais',
      'Consultoria estratégica',
      'Suporte prioritário',
    ],
    highlighted: true,
    color: 'primary',
  },
  {
    name: 'Premium',
    icon: Crown,
    description: 'Solução completa para grandes marcas',
    features: [
      'Rebranding estratégico',
      'Gestão ilimitada de redes',
      'Produção audiovisual completa',
      'Campanhas integradas',
      'Gestão de crise',
      'Relatórios personalizados',
      'Gestor de conta dedicado',
      'Suporte 24/7',
    ],
    highlighted: false,
    color: 'secondary',
  },
];

export const PricingSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimatedSection>
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
              Planos e Pacotes
            </span>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Escolha o plano ideal para sua{' '}
              <span className="text-gradient">empresa</span>
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-muted-foreground">
              Soluções flexíveis que acompanham o crescimento do seu negócio.
            </p>
          </AnimatedSection>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <AnimatedSection key={plan.name} delay={0.2 + index * 0.1} direction="up">
              <motion.div
                whileHover={{ y: -12 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-3xl p-8 h-full flex flex-col ${
                  plan.highlighted
                    ? 'bg-secondary text-secondary-foreground shadow-2xl scale-105 border-2 border-primary'
                    : 'bg-card border border-border shadow-lg'
                }`}
              >
                {/* Popular Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  plan.highlighted ? 'bg-primary/20' : 'bg-primary/10'
                }`}>
                  <plan.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Plan Name */}
                <h3 className={`text-2xl font-heading font-bold mb-2 ${
                  plan.highlighted ? 'text-secondary-foreground' : 'text-foreground'
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${
                  plan.highlighted ? 'text-secondary-foreground/70' : 'text-muted-foreground'
                }`}>
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'bg-primary/20' : 'bg-primary/10'
                      }`}>
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className={`text-sm ${
                        plan.highlighted ? 'text-secondary-foreground/90' : 'text-muted-foreground'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={plan.highlighted ? 'hero' : 'outline'}
                  size="lg"
                  className="w-full"
                  onClick={scrollToContact}
                >
                  Solicitar Orçamento
                </Button>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
