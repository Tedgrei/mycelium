import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="section-gradient-hero border-b border-border/70">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase text-primary">
            Catálogo institucional
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Nutrição vegetal para cultivos com mais equilíbrio e previsibilidade.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            A Mycelium reúne produtos para solo, coco e hidroponia com foco em
            manejo simples, leitura clara de fases e resultados consistentes.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/#produtos" className={buttonVariants({ size: "lg" })}>
              Ver produtos
            </Link>
            <Link
              href="/#contato"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Solicitar atendimento
            </Link>
          </div>
        </div>
        <div className="relative min-h-[320px] overflow-hidden rounded-lg border border-border bg-secondary">
          <Image
            src="/images/products/Mycelium_Raiz_Solo_Biomineral_3072x2048.webp"
            alt="Produto Mycelium para desenvolvimento radicular em destaque"
            fill
            className="object-cover object-center"
            priority
            sizes="(min-width: 1024px) 44vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
