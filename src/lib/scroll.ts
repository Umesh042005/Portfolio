import type { SectionKey } from "@/data/portfolio";

export function scrollToSection(section: SectionKey) {
  document.getElementById(section)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
