export function CultivationSection() {
  return (
    <section
      id="cultivo"
      className="section-gradient-cultivation border-b border-border/70"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-primary">
            Cultivo
          </p>
          <h2 className="mt-3 text-3xl font-semibold">
            Manejo por fase, sem complicar a rotina.
          </h2>
        </div>
        <p className="text-base leading-7 text-muted-foreground md:col-span-2">
          O catálogo organiza as soluções por necessidade: raiz, crescimento,
          floração, acabamento e correção. Assim, o produtor encontra com mais
          facilidade o produto certo para cada momento da planta.
        </p>
      </div>
    </section>
  );
}
