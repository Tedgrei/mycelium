import { ProductCatalogExplorer } from "@/components/sections/product-catalog-explorer";
import {
  productCatalog,
  productLineDetails,
  productLineOrder,
} from "@/features/products/product-catalog";

export function ProductsSection() {
  const lines = productLineOrder.map((line) => productLineDetails[line]);

  return (
    <section
      id="produtos"
      className="section-gradient-products border-b border-border/70"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="max-w-2xl min-w-0">
          <p className="text-sm font-semibold uppercase text-primary">
            Produtos
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground">
            Catálogo Mycelium
          </h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
            Escolha uma linha para ver produtos separados por tipo e função. A
            caixa em destaque avança devagar entre as linhas e abre a seleção
            completa ao clicar.
          </p>
        </div>
        <ProductCatalogExplorer products={productCatalog} lines={lines} />
      </div>
    </section>
  );
}
