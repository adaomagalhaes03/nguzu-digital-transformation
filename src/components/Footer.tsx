import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logoNguzu from "@/assets/logo-nguzu.jpg";

const usefulLinks = [
  { name: "Sobre Nós", href: "#about" },
  { name: "Serviços", href: "#services" },
  { name: "Equipa", href: "#team" },
  { name: "Contacto", href: "#footer" },
];

const supportLinks = [
  { name: "Centro de Ajuda", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "Política de Privacidade", href: "#" },
  { name: "Termos de Serviço", href: "#" },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com" },
  { icon: Instagram, href: "https://instagram.com" },
  { icon: Linkedin, href: "https://linkedin.com" },
  { icon: Twitter, href: "https://twitter.com" },
];

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer
      id="footer"
      className="bg-primary-dark text-primary-foreground"
      ref={ref}
    >
      <div className="container-custom mx-auto section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logoNguzu}
                alt="NGUZU Consultoria"
                className="h-12 w-12 object-contain rounded-full"
              />
              <span className="font-display font-bold text-xl">NGUZU</span>
            </div>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Fornecemos soluções de consultoria e formação de alta qualidade,
              ajudando nossos clientes a alcançar seus objetivos e a melhorar
              sua gestão financeira.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Useful Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold text-lg mb-6">Links Úteis</h4>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-lg mb-6">Suporte</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold text-lg mb-6">Informação de Contacto</h4>
            <p className="text-primary-foreground/70 mb-4">
              Entre em contacto connosco!
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">
                  Centralidade do Kilamba, Luanda, Angola
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="https://wa.me/244923456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  +244 923 456 789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="mailto:info@nguzuconsultoria.ao"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  info@nguzuconsultoria.ao
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom mx-auto px-4 md:px-8 py-6">
          <p className="text-center text-primary-foreground/60 text-sm">
            Copyright © {new Date().getFullYear()} NGUZU Consultoria. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
