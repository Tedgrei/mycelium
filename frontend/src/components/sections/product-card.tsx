import Image from "next/image";

import type { ProductHighlight } from "@/features/home/home-content";

type ProductCardProps = {
  product: ProductHighlight;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-border bg-card/95 text-card-foreground shadow-sm">
      <div className="relative aspect-[3/2] overflow-hidden bg-secondary">
        <Image
          src={product.image}
          alt={`Produto da ${product.name} Mycelium`}
          fill
          className="object-cover object-center"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {product.description}
        </p>
      </div>
    </article>
  );
}
