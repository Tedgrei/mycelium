import { ProductImagePreview } from "@/components/sections/product-image-preview";
import type { ProductHighlight } from "@/features/home/home-content";

type ProductCardProps = {
  product: ProductHighlight;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="min-w-0 overflow-hidden rounded-lg border border-border bg-card/95 text-card-foreground shadow-sm">
      <div className="w-full min-w-0 bg-secondary/70 p-3 sm:p-4">
        <ProductImagePreview
          src={product.image}
          alt={`Produto da ${product.name} Mycelium`}
          modalTitle={`Imagem ampliada do produto ${product.name}`}
          buttonClassName="rounded-lg bg-background/70"
          imageClassName="rounded-lg"
          sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 767px) calc(100vw - 48px), 33vw"
        />
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {product.description}
        </p>
      </div>
    </article>
  );
}
