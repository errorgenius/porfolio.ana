import Briefcase from "@/components/icons/Briefcase.astro"
import Certificate from "@/components/icons/Certificate.astro"
import ProfileCheck from "@/components/icons/ProfileCheck.astro"
import Link from "@/components/icons/Link.astro"

export const TAGS = {
  CORPORATIVO: {
    name: "Corporativo",
    class: "bg-[#1e3a5f] text-white",
    icon: Briefcase,
  },
  COBRANZAS: {
    name: "Cobranzas",
    class: "bg-[#334155] text-white",
    icon: ProfileCheck,
  },
  PI: {
    name: "Propiedad Intelectual",
    class: "bg-[#0f766e] text-white",
    icon: Certificate,
  },
  CONTRATOS: {
    name: "Contratos",
    class: "bg-[#854d0e] text-white",
    icon: Link,
  },
  LITIGIO: {
    name: "Litigio",
    class: "bg-[#7f1d1d] text-white",
    icon: Briefcase,
  },
  ACADEMICO: {
    name: "Academico",
    class: "bg-[#3f3f46] text-white",
    icon: Certificate,
  },
}
