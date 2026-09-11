export type NavigationLink = {
  label: string;
  href: string;
};

export const primaryNavigationLinks: NavigationLink[] = [
  { label: "Produtos", href: "/#produtos" },
  { label: "Cultivo", href: "/#cultivo" },
  { label: "Tecnologia", href: "/#tecnologia" },
  { label: "Contato", href: "/#contato" },
];

export const productLineLinks: NavigationLink[] = [
  { label: "Linha Aqua", href: "/#produtos" },
  { label: "Linha Amazon", href: "/#produtos" },
  { label: "Substratos", href: "/#produtos" },
  { label: "Condicionadores", href: "/#produtos" },
];
