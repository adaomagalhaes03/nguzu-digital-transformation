import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center parallax-bg"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(24, 48, 87, 0.85) 0%, rgba(37, 90, 150, 0.75) 100%), url(${heroBg})`,
      }}
    >
      <div className="container-custom mx-auto px-4 md:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full text-accent-foreground mb-8"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">
              Consultoria de Excelência em Angola
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6"
          >
            NGUZU{" "}
            <span className="text-accent-light">CONSULTORIA</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-primary-foreground/90 font-light mb-4"
          >
            Força, Crescimento & Inovação Contínua
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-10"
          >
            Transformamos a gestão financeira numa ferramenta estratégica para o
            sucesso do seu negócio em Angola.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://wa.me/244923456789"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-glow"
            >
              Iniciar Consulta
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={scrollToAbout}
              className="flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Conhecer Mais
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/70 hover:text-primary-foreground transition-colors cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
