import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedElements';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, ArrowRight, Clock } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'contato@vimark.ao', href: 'mailto:contato@vimark.ao' },
  { icon: Phone, label: 'Telefone', value: '+244 923 000 000', href: 'tel:+244923000000' },
  { icon: MapPin, label: 'Localização', value: 'Luanda, Angola', href: null },
  { icon: Clock, label: 'Horário', value: 'Seg - Sex: 8h - 18h', href: null },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/50 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                <span className="w-8 h-0.5 bg-primary" />
                Entre em Contato
              </span>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">
                Pronto para Transformar sua Marca?
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <p className="text-muted-foreground mb-10 leading-relaxed">
                Entre em contato e descubra como podemos ajudar sua empresa a alcançar 
                novos patamares de sucesso através de estratégias criativas e inovadoras.
              </p>
            </AnimatedSection>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <AnimatedSection key={item.label} delay={0.3 + index * 0.1}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="bg-muted/50 rounded-xl p-4 group"
                  >
                    {item.href ? (
                      <a href={item.href} className="flex items-start gap-4">
                        <div className="feature-icon w-12 h-12 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                          <div className="font-semibold text-secondary text-sm">{item.value}</div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4">
                        <div className="feature-icon w-12 h-12">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                          <div className="font-semibold text-secondary text-sm">{item.value}</div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <AnimatedSection delay={0.3} direction="right">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-3xl p-8 shadow-lg border border-border"
            >
              <h3 className="text-xl font-heading font-bold text-secondary mb-6">
                Solicitar Consultoria Gratuita
              </h3>
              
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-secondary mb-2 block">
                      Nome *
                    </label>
                    <Input placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-secondary mb-2 block">
                      Empresa
                    </label>
                    <Input placeholder="Nome da empresa" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-secondary mb-2 block">
                    Email *
                  </label>
                  <Input type="email" placeholder="seu@email.com" />
                </div>

                <div>
                  <label className="text-sm font-medium text-secondary mb-2 block">
                    Telefone
                  </label>
                  <Input type="tel" placeholder="+244 900 000 000" />
                </div>

                <div>
                  <label className="text-sm font-medium text-secondary mb-2 block">
                    Mensagem *
                  </label>
                  <Textarea placeholder="Descreva seu projeto ou necessidade..." />
                </div>

                <Button variant="default" size="lg" className="w-full group">
                  Enviar Mensagem
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
