import Image from "next/image";

export function TechnologySection() {
  return (
    <section
      id="tecnologia"
      className="section-gradient-technology border-b border-border/70"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1fr] md:items-center">
          <div className="relative min-h-[280px] overflow-hidden rounded-lg border border-border bg-secondary">
            <Image
              src="/images/products/Mycelium_Solo_Biomineral_3072x2048_NITIDO.webp"
              alt="Produto Mycelium para solo biomineral"
              fill
              className="object-cover object-center"
              sizes="(min-width: 768px) 42vw, 100vw"
            />
          </div>
          <div>
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
      </div>
    </section>
  );
}
