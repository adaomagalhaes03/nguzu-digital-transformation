import { useState } from "react";
import { motion } from "framer-motion";
import { X, Send, CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  { value: "contabilidade", label: "Contabilidade Operacional" },
  { value: "fiscais", label: "Obrigações Fiscais" },
  { value: "pessoal", label: "Tratamento de Pessoal" },
  { value: "relatorios", label: "Relatórios Contabilísticos" },
  { value: "auditoria", label: "Auditoria" },
  { value: "financeira", label: "Consultoria Financeira" },
  { value: "impostos", label: "Gestão de Impostos" },
  { value: "abertura", label: "Abertura de Empresa" },
  { value: "estrategicos", label: "Planos Estratégicos" },
  { value: "estruturacao", label: "Estruturação de Negócios" },
  { value: "gestao-financeira", label: "Gestão Financeira e Orçamental" },
  { value: "pessoas", label: "Gestão de Pessoas" },
  { value: "workshops", label: "Workshops" },
  { value: "formacao-contabilidade", label: "Formação em Contabilidade" },
  { value: "excel", label: "Excel Avançado" },
  { value: "oratoria", label: "Oratória Empresarial" },
];

const QuoteModal = ({ isOpen, onClose }: QuoteModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    onClose();
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });

    // Show success toast with progress bar
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display text-foreground">
            Solicitar Orçamento
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="O seu nome"
                className="bg-background border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+244 900 000 000"
                className="bg-background border-border"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="email@exemplo.com"
              className="bg-background border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Empresa</Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Nome da empresa"
              className="bg-background border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Serviço Pretendido *</Label>
            <Select
              value={formData.service}
              onValueChange={(value) =>
                setFormData({ ...formData, service: value })
              }
              required
            >
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder="Selecione um serviço" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                {services.map((service) => (
                  <SelectItem key={service.value} value={service.value}>
                    {service.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Mensagem</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Descreva as suas necessidades..."
              rows={4}
              className="bg-background border-border resize-none"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              {isSubmitting ? (
                "A enviar..."
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Pedido
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteModal;
