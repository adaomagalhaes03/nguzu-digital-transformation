import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { DollarSign, BarChart3, Users } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const features = [
  {
    icon: DollarSign,
    title: "Preços Competitivos",
    description:
      "Oferecemos soluções acessíveis e personalizadas para cada tipo de negócio.",
  },
  {
    icon: BarChart3,
    title: "Análise Financeira",
    description:
      "Diagnóstico completo da saúde financeira da sua empresa com relatórios detalhados.",
  },
  {
    icon: Users,
    title: "Equipa Profissional",
    description:
      "Consultores especializados com vasta experiência no mercado angolano.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="section-tag mb-4">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            SOBRE NÓS
            <span className="w-2 h-2 bg-accent rounded-full"></span>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1">
              <h2 className="section-title">
                <span className="text-primary">Introdução</span> à Melhor
                Consultoria de Angola!
              </h2>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              <p className="text-muted-foreground leading-relaxed">
                Num mercado cada vez mais dinâmico e digital, a gestão
                financeira deixou de ser apenas uma obrigação legal para se
                tornar um verdadeiro pilar estratégico do sucesso empresarial. A
                NGUZU Consultoria nasce com o propósito de apoiar empresas e
                empreendedores.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Oferecemos serviços contabilísticos personalizados, orientados
                para a transparência, precisão e tomada de decisão informada.
                Através de plataformas tecnológicas eficientes e uma equipa de
                especialistas experientes, garantimos acompanhamento próximo.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card card-hover border border-border group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Media Section - Overlapping Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative"
        >
          <div className="flex flex-col lg:flex-row items-center lg:items-end gap-6 lg:gap-0">
            {/* Large Image - Main */}
            <div className="relative rounded-2xl overflow-hidden group w-full lg:w-[65%] h-[350px] lg:h-[450px] shadow-xl">
              <img
                src={aboutImage}
                alt="Equipa NGUZU Consultoria"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Video Card - Overlapping */}
            <div className="relative lg:absolute lg:right-0 lg:bottom-8 w-full lg:w-[45%] h-[280px] lg:h-[320px] rounded-2xl overflow-hidden group shadow-2xl border-4 border-background">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
                alt="Vídeo institucional"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary-dark/30 flex items-center justify-center">
                <a
                  href="#"
                  className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-accent flex items-center justify-center hover:bg-accent/90 transition-all duration-300 hover:scale-110 shadow-glow"
                >
                  <svg
                    className="w-6 h-6 lg:w-8 lg:h-8 text-accent-foreground ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
