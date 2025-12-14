import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedElements';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <AnimatedSection>
              <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                Entre em Contato
              </span>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                Pronto para transformar sua{' '}
                <span className="text-gradient">marca?</span>
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Entre em contato e descubra como podemos ajudar sua empresa a alcançar 
                novos patamares de sucesso através de estratégias criativas e inovadoras.
              </p>
            </AnimatedSection>

            {/* Contact Info */}
            <div className="space-y-6">
              <AnimatedSection delay={0.3} direction="left">
                <motion.a
                  href="mailto:contato@vimark.ao"
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-primary/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-semibold text-foreground">contato@vimark.ao</div>
                  </div>
                </motion.a>
              </AnimatedSection>

              <AnimatedSection delay={0.4} direction="left">
                <motion.a
                  href="tel:+244923000000"
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-primary/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Telefone</div>
                    <div className="font-semibold text-foreground">+244 923 000 000</div>
                  </div>
                </motion.a>
              </AnimatedSection>

              <AnimatedSection delay={0.5} direction="left">
                <motion.div
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Localização</div>
                    <div className="font-semibold text-foreground">Luanda, Angola</div>
                  </div>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>

          {/* Contact Form */}
          <AnimatedSection delay={0.3} direction="right">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-3xl p-8 shadow-xl border border-border"
            >
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Solicitar Consultoria
              </h3>
              
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nome
                    </label>
                    <Input 
                      placeholder="Seu nome" 
                      className="h-12 bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Empresa
                    </label>
                    <Input 
                      placeholder="Nome da empresa" 
                      className="h-12 bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="seu@email.com" 
                    className="h-12 bg-muted/50 border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Telefone
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="+244 900 000 000" 
                    className="h-12 bg-muted/50 border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Mensagem
                  </label>
                  <Textarea 
                    placeholder="Descreva seu projeto ou necessidade..." 
                    className="min-h-[120px] bg-muted/50 border-border focus:border-primary resize-none"
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full group">
                  Enviar Mensagem
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
