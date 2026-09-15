import Link from "next/link";

import { ProductImagePreview } from "@/components/sections/product-image-preview";
import { buttonVariants } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="section-gradient-hero border-b border-border/70">
      <div className="mx-auto grid w-full max-w-7xl min-w-0 gap-8 px-5 py-12 sm:px-6 md:py-16 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-12 lg:px-8 lg:py-20">
        <div className="order-2 flex min-w-0 flex-col justify-center lg:order-1">
          <p className="text-sm font-semibold uppercase text-primary">
            Catálogo institucional
          </p>
          <h1 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-foreground sm:mt-4 sm:text-5xl">
            Nutrição vegetal para cultivos com mais equilíbrio e previsibilidade.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:mt-5 sm:text-lg sm:leading-8">
            Produtos para solo, coco e hidroponia com leitura clara por fase e
            manejo simples.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
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
        <div className="order-1 w-full min-w-0 lg:order-2">
          <ProductImagePreview
            src="/images/products/Mycelium_Raiz_Solo_Biomineral_3072x2048.webp"
            alt="Produto Mycelium para desenvolvimento radicular em destaque"
            modalTitle="Imagem ampliada do produto Mycelium para desenvolvimento radicular"
            buttonClassName="rounded-lg border border-border bg-secondary shadow-sm"
            imageClassName="rounded-lg"
            priority
            sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 48px), 56vw"
          />
        </div>
      </div>
    </section>
  );
}
