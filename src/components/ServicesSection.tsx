import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Calculator,
  LineChart,
  Building2,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";
import QuoteModal from "@/components/QuoteModal";

const services = [
  {
    icon: Calculator,
    department: "Departamento Técnico-Contabilístico",
    items: [
      { name: "Contabilidade Operacional", price: "40.000 - 650.000 Kz" },
      { name: "Obrigações Fiscais", price: "20.000 - 350.000 Kz" },
      { name: "Tratamento de Pessoal", price: "30.000 - 300.000 Kz" },
      { name: "Relatórios Contabilísticos", price: "30.000 - 300.000 Kz" },
      { name: "Auditoria", price: "50.000 - 600.000 Kz" },
    ],
  },
  {
    icon: LineChart,
    department: "Departamento Financeiro e Estratégico",
    items: [
      { name: "Consultoria Financeira", price: "100.000 - 260.000 Kz/mês" },
      { name: "Gestão de Impostos", price: "120.000 - 260.000 Kz/mês" },
      { name: "Relatórios Personalizados", price: "80.000 - 100.000 Kz/mês" },
      { name: "Abertura de Empresa", price: "200.000 - 700.000 Kz" },
    ],
  },
  {
    icon: Building2,
    department: "Consultoria & Gestão Organizacional",
    items: [
      { name: "Planos Estratégicos", price: "150.000 - 600.000 Kz" },
      { name: "Estruturação de Negócios", price: "100.000 - 560.000 Kz" },
      { name: "Gestão Financeira e Orçamental", price: "250.000 - 1.000.000 Kz" },
      { name: "Gestão de Pessoas", price: "80.000 - 650.000 Kz" },
    ],
  },
  {
    icon: GraduationCap,
    department: "Formação & Desenvolvimento",
    items: [
      { name: "Workshops", price: "35.000 - 250.000 Kz" },
      { name: "Formação em Contabilidade", price: "100.000 - 1.300.000 Kz" },
      { name: "Excel Avançado", price: "60.000 - 400.000 Kz" },
      { name: "Oratória Empresarial", price: "50.000 - 550.000 Kz" },
    ],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <section
      id="services"
      className="section-padding bg-muted"
      ref={ref}
    >
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
            NOSSOS SERVIÇOS
            <span className="w-2 h-2 bg-accent rounded-full"></span>
          </div>
          <h2 className="section-title mb-4">
            <span className="text-primary">Soluções</span> Profissionais
          </h2>
          <p className="section-subtitle mx-auto">
            Oferecemos uma gama completa de serviços de consultoria e formação
            para impulsionar o seu negócio.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.department}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card card-hover border border-border group"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground text-lg leading-tight">
                    {service.department}
                  </h3>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              {/* Items */}
              <ul className="space-y-4">
                {service.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-center justify-between py-3 border-b border-border last:border-0"
                  >
                    <span className="text-foreground font-medium">
                      {item.name}
                    </span>
                    <span className="text-accent font-semibold text-sm">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="mt-6 inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                Solicitar Orçamento
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </section>
  );
};

export default ServicesSection;
