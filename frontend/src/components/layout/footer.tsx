import { Leaf, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  primaryNavigationLinks,
  productLineLinks,
} from "@/components/layout/navigation";

const contactLinks = [
  {
    label: "contato@mycelium.com.br",
    href: "mailto:contato@mycelium.com.br",
    icon: Mail,
  },
  {
    label: "(11) 4000-0000",
    href: "tel:+551140000000",
    icon: Phone,
  },
  {
    label: "Atendimento em todo o Brasil",
    href: "/#contato",
    icon: MapPin,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/45">
      <div className="mx-auto grid w-full max-w-7xl min-w-0 gap-10 px-5 py-12 sm:px-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,0.8fr)_minmax(0,1fr)] lg:px-8">
        <section className="min-w-0" aria-label="Mycelium">
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span className="relative block h-12 w-40">
              <Image
                src="/images/logo/logo-transparent.webp"
                alt="Mycelium"
                fill
                className="object-contain object-left"
                sizes="160px"
              />
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
            Soluções para nutrição vegetal pensadas para cultivos mais
            equilibrados, produtivos e consistentes.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm text-muted-foreground">
            <Leaf className="size-4 text-primary" aria-hidden="true" />
            Fórmulas para cada fase do cultivo
          </div>
        </section>

        <FooterLinkGroup title="Navegação" links={primaryNavigationLinks} />
        <FooterLinkGroup title="Produtos" links={productLineLinks} />

        <section className="min-w-0" aria-labelledby="footer-contact">
          <h2 id="footer-contact" className="text-sm font-semibold uppercase">
            Contato
          </h2>
          <ul className="mt-4 space-y-3">
            {contactLinks.map((link) => {
              const Icon = link.icon;

              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex items-start gap-2 rounded-md text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Icon
                      className="mt-1 size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
      <div className="border-t border-border/70">
        <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-3 px-5 py-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {currentYear} Mycelium. Todos os direitos reservados.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              href="/#contato"
              className="rounded-md transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Política de atendimento
            </Link>
            <Link
              href="/#produtos"
              className="rounded-md transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Catálogo
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterLinkGroupProps = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};

function FooterLinkGroup({ title, links }: FooterLinkGroupProps) {
  const headingId = `footer-${title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()}`;

  return (
    <section className="min-w-0" aria-labelledby={headingId}>
      <h2 id={headingId} className="text-sm font-semibold uppercase">
        {title}
      </h2>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="rounded-md text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
