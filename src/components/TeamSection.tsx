import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "Lidero a equipa com foco em estratégia, inovação e melhoria contínua. Trabalhamos para transformar cada cliente através de soluções modernas e eficazes.",
    name: "Ruth Matias",
    designation:
      "Diretora do Departamento de Consultoria & Gestão Organizacional",
    src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&q=80",
  },
  {
    quote:
      "O meu compromisso é garantir que cada processo organizacional seja eficiente, claro e orientado para resultados.",
    name: "Jelson Balanga",
    designation: "Consultor de Processos Organizacionais",
    src: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=500&q=80",
  },
  {
    quote:
      "Acredito que o sucesso nasce de um planeamento estratégico sólido e de uma execução disciplinada.",
    name: "Mayara Luís",
    designation: "Consultora de Planeamento Estratégico",
    src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&q=80",
  },
  {
    quote:
      "Desenvolver pessoas e culturas fortes é a base para organizações de alta performance.",
    name: "Chris Mavinga",
    designation: "Consultor de Cultura Organizacional e Liderança",
    src: "https://images.unsplash.com/photo-1570158268183-d296b2892211?w=500&q=80",
  },
  {
    quote:
      "Promovo estruturas organizacionais claras, eficientes e alinhadas ao crescimento sustentável.",
    name: "Isabel Ndandi",
    designation: "Consultora de Gestão Administrativa",
    src: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=500&q=80",
  },
];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="team"
      className="section-padding bg-background"
      ref={ref}
    >
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="section-tag mx-auto mb-4">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            NOSSA EQUIPA
            <span className="w-2 h-2 bg-accent rounded-full"></span>
          </div>
          <h2 className="section-title mb-4">
            Membros da <span className="text-primary">Equipa</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Conheça os profissionais dedicados que fazem da NGUZU Consultoria
            uma referência em Angola.
          </p>
        </motion.div>

        {/* Animated Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
