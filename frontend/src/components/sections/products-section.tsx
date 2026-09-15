import { ProductCard } from "@/components/sections/product-card";
import { productHighlights } from "@/features/home/home-content";

export function ProductsSection() {
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
            Linhas para diferentes sistemas de cultivo
          </h2>
        </div>
        <div className="mt-8 grid min-w-0 gap-5 md:grid-cols-3">
          {productHighlights.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
