import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    details: ["Centralidade do Kilamba", "Luanda, Angola"],
  },
  {
    icon: Phone,
    title: "Telefone",
    details: ["+244 923 456 789", "+244 912 345 678"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@nguzuconsultoria.ao", "suporte@nguzuconsultoria.ao"],
  },
  {
    icon: Clock,
    title: "Horário",
    details: ["Segunda - Sexta: 8h - 17h", "Sábado: 9h - 13h"],
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });

    toast({
      duration: 10000,
      className: "group",
      description: (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <div>
              <p className="font-semibold text-foreground">Mensagem Enviada com Sucesso!</p>
              <p className="text-sm text-muted-foreground">
                Aguarde o nosso contacto em breve.
              </p>
            </div>
          </div>
          <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 10, ease: "linear" }}
            />
          </div>
        </div>
      ),
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-muted" ref={ref}>
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-tag mx-auto mb-4">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            CONTACTOS
            <span className="w-2 h-2 bg-accent rounded-full"></span>
          </div>
          <h2 className="section-title mb-4">
            <span className="text-primary">Entre em</span> Contacto
          </h2>
          <p className="section-subtitle mx-auto">
            Estamos aqui para ajudar. Entre em contacto connosco e responderemos
            o mais brevemente possível.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 space-y-4"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-card rounded-xl p-5 shadow-card border border-border flex items-start gap-4 card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <info.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {info.title}
                  </h4>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Envie-nos uma Mensagem
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Nome Completo *</Label>
                    <Input
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="O seu nome"
                      className="bg-background border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email *</Label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="email@exemplo.com"
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-subject">Assunto *</Label>
                  <Input
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Assunto da mensagem"
                    className="bg-background border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message">Mensagem *</Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Escreva a sua mensagem..."
                    rows={5}
                    className="bg-background border-border resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  {isSubmitting ? (
                    "A enviar..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
