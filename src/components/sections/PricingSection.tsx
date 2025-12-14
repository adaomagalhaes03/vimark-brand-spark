import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedElements';
import { Button } from '@/components/ui/button';
import { Check, Zap, Star, Crown, ArrowRight } from 'lucide-react';

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
      'Relatórios personalizados',
      'Gestor de conta dedicado',
      'Suporte 24/7',
    ],
    highlighted: false,
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
    <section id="pricing" className="section-padding bg-background relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wider uppercase mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              Planos e Pacotes
              <span className="w-8 h-0.5 bg-primary" />
            </span>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
              Escolha o Plano Ideal para sua Empresa
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground">
              Soluções flexíveis que acompanham o crescimento do seu negócio.
            </p>
          </AnimatedSection>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <AnimatedSection key={plan.name} delay={0.1 + index * 0.1} direction="up">
              <motion.div
                whileHover={{ y: -8 }}
                className={`relative rounded-3xl p-8 h-full flex flex-col ${
                  plan.highlighted
                    ? 'bg-secondary text-secondary-foreground shadow-2xl ring-4 ring-primary/20'
                    : 'bg-card border border-border shadow-sm'
                }`}
              >
                {/* Popular Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                      Mais Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  plan.highlighted ? 'bg-primary' : 'bg-accent'
                }`}>
                  <plan.icon className={`w-6 h-6 ${plan.highlighted ? 'text-primary-foreground' : 'text-primary'}`} />
                </div>

                {/* Plan Name */}
                <h3 className={`text-2xl font-heading font-bold mb-2 ${
                  plan.highlighted ? 'text-secondary-foreground' : 'text-secondary'
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
                        plan.highlighted ? 'bg-primary' : 'bg-accent'
                      }`}>
                        <Check className={`w-3 h-3 ${plan.highlighted ? 'text-primary-foreground' : 'text-primary'}`} />
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
                  className="w-full group"
                  onClick={scrollToContact}
                >
                  Solicitar Orçamento
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
