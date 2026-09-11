import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { primaryNavigationLinks } from "@/components/layout/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Pular para o conteúdo
      </a>
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-20 items-center justify-between gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Mycelium, página inicial"
          >
            <span className="relative block h-12 w-36 sm:w-44">
              <Image
                src="/images/logo/logo-transparent.webp"
                alt="Mycelium"
                fill
                className="object-contain object-left"
                priority
                sizes="(min-width: 640px) 176px, 144px"
              />
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Navegação principal"
          >
            {primaryNavigationLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/#contato"
              className={buttonVariants({
                className: "hidden sm:inline-flex",
              })}
            >
              Fale conosco
            </Link>
            <details className="group relative md:hidden">
              <summary
                className="flex size-10 cursor-pointer list-none items-center justify-center rounded-md border border-border bg-background text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden"
                aria-label="Abrir menu"
              >
                <Menu className="size-5" aria-hidden="true" />
              </summary>
              <nav
                className="absolute right-0 mt-3 w-64 rounded-md border border-border bg-popover p-2 text-popover-foreground shadow-lg"
                aria-label="Menu mobile"
              >
                {primaryNavigationLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block rounded-md px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/#contato"
                  className="mt-2 block rounded-md bg-primary px-3 py-3 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Fale conosco
                </Link>
              </nav>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
