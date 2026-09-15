import { ProductImagePreview } from "@/components/sections/product-image-preview";

export function TechnologySection() {
  return (
    <section
      id="tecnologia"
      className="section-gradient-technology border-b border-border/70"
    >
      <div className="mx-auto grid w-full max-w-7xl min-w-0 grid-cols-1 items-center gap-10 px-5 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="w-full min-w-0">
          <ProductImagePreview
            src="/images/products/Mycelium_Solo_Biomineral_3072x2048_NITIDO.webp"
            alt="Produto Mycelium para solo biomineral"
            modalTitle="Imagem ampliada do produto Mycelium Solo Biomineral"
            buttonClassName="rounded-lg border border-border bg-secondary"
            imageClassName="rounded-lg"
            sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 48px), 50vw"
          />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold uppercase text-primary">
            Tecnologia
          </p>
          <h2 className="mt-3 text-3xl font-semibold">
            Fórmulas claras para decisões de campo melhores.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            A identidade da navegação privilegia leitura rápida, categorias
            diretas e caminhos curtos entre informação institucional, produtos
            e contato comercial.
          </p>
        </div>
      </div>
    </section>
  );
}
