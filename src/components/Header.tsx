import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoNguzu from "@/assets/logo-nguzu.jpg";
import QuoteModal from "@/components/QuoteModal";

const navLinks = [
  { name: "Início", href: "#hero" },
  { name: "Sobre Nós", href: "#about" },
  { name: "Serviços", href: "#services" },
  { name: "Equipa", href: "#team" },
  { name: "Contacto", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            className="flex items-center gap-3"
          >
            <img
              src={logoNguzu}
              alt="NGUZU Consultoria"
              className="h-12 w-12 object-contain rounded-full"
            />
            <span
              className={`font-display font-bold text-xl hidden sm:block transition-colors duration-300 ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              NGUZU
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`font-medium transition-colors duration-300 hover:text-accent ${
                  scrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 hover:shadow-glow"
            >
              <Phone className="w-4 h-4" />
              Solicitar Orçamento
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-foreground hover:bg-muted"
                : "text-primary-foreground hover:bg-primary-foreground/10"
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background shadow-lg transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="container-custom mx-auto px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="text-foreground font-medium py-2 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setIsQuoteModalOpen(true);
              setIsOpen(false);
            }}
            className="flex items-center justify-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-lg font-semibold mt-4"
          >
            <Phone className="w-4 h-4" />
            Solicitar Orçamento
          </button>
        </nav>
      </div>

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </header>
  );
};

export default Header;
