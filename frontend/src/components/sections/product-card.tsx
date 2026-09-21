import Image from "next/image";
import type {
  ProductCatalogItem,
  ProductLine,
} from "@/features/products/product-catalog";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: ProductCatalogItem;
};

const lineFooterClass: Record<ProductLine, string> = {
  aqua: "bg-sky-600 text-white",
  amazon: "bg-emerald-700 text-white",
  amazing: "bg-fuchsia-700 text-white",
  base: "bg-lime-700 text-white",
  biomineral: "bg-amber-700 text-white",
  substrates: "bg-stone-700 text-white",
  classic: "bg-primary text-primary-foreground",
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm transition-shadow duration-200 hover:shadow-md">
      <div className="min-w-0 bg-secondary/70 p-3 sm:p-4">
        <Image
          src={product.image}
          alt={product.imageAlt}
          width={3072}
          height={2048}
          className="h-auto w-full max-w-full rounded-md object-contain"
          sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 767px) calc(50vw - 32px), (max-width: 1279px) calc(33vw - 32px), 25vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          {product.type}
        </p>
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {product.purpose}
        </p>
      </div>
      <footer
        className={cn(
          "px-4 py-3 text-xs font-semibold uppercase tracking-wide sm:px-5",
          lineFooterClass[product.line],
        )}
      >
        {product.lineName}
      </footer>
    </article>
  );
}
