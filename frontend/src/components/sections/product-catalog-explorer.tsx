"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ProductCard } from "@/components/sections/product-card";
import type {
  ProductCatalogItem,
  ProductLine,
  ProductLineDetails,
} from "@/features/products/product-catalog";
import { cn } from "@/lib/utils";

type ProductCatalogExplorerProps = {
  products: ProductCatalogItem[];
  lines: ProductLineDetails[];
};

const AUTO_ADVANCE_MS = 6500;

const lineAccentClass: Record<ProductLine, string> = {
  aqua: "border-sky-500 bg-sky-500/10",
  amazon: "border-emerald-600 bg-emerald-500/10",
  amazing: "border-fuchsia-600 bg-fuchsia-500/10",
  base: "border-lime-600 bg-lime-500/10",
  biomineral: "border-amber-600 bg-amber-500/10",
  substrates: "border-stone-600 bg-stone-500/10",
  classic: "border-primary bg-primary/10",
};

export function ProductCatalogExplorer({
  products,
  lines,
}: ProductCatalogExplorerProps) {
  const [selectedLine, setSelectedLine] = useState<ProductLine>(
    lines[0]?.id ?? "aqua",
  );
  const [slideIndex, setSlideIndex] = useState(0);

  const activeLine =
    lines.find((line) => line.id === selectedLine) ?? lines[0];

  const activeProducts = useMemo(
    () => products.filter((product) => product.line === selectedLine),
    [products, selectedLine],
  );

  const productCountByLine = useMemo(() => {
    return products.reduce<Record<ProductLine, number>>(
      (countByLine, product) => ({
        ...countByLine,
        [product.line]: countByLine[product.line] + 1,
      }),
      {
        aqua: 0,
        amazon: 0,
        amazing: 0,
        base: 0,
        biomineral: 0,
        substrates: 0,
        classic: 0,
      },
    );
  }, [products]);

  const productsByType = useMemo(() => {
    return activeProducts.reduce<Record<string, ProductCatalogItem[]>>(
      (groups, product) => ({
        ...groups,
        [product.type]: [...(groups[product.type] ?? []), product],
      }),
      {},
    );
  }, [activeProducts]);

  useEffect(() => {
    const shouldReduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (shouldReduceMotion.matches || lines.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setSelectedLine((currentLine) => {
        const currentIndex = lines.findIndex((line) => line.id === currentLine);
        return lines[(currentIndex + 1) % lines.length]?.id ?? currentLine;
      });
      setSlideIndex((currentIndex) => currentIndex + 1);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [lines]);

  if (!activeLine) {
    return null;
  }

  const activeImage =
    activeLine.featuredImages[
      slideIndex % Math.max(activeLine.featuredImages.length, 1)
    ];

  return (
    <div className="mt-8 space-y-8">
      <div className="grid min-w-0 gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)]">
        <button
          type="button"
          className={cn(
            "group min-w-0 overflow-hidden rounded-lg border bg-card text-left text-card-foreground shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            lineAccentClass[activeLine.id],
          )}
          onClick={() => {
            document
              .getElementById(`linha-${activeLine.id}`)
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          aria-label={`Abrir produtos da ${activeLine.name}`}
        >
          <div className="grid min-w-0 gap-5 p-4 sm:p-5 md:grid-cols-[1fr_1.15fr] md:items-center">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Linha em destaque
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
                {activeLine.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {activeLine.description}
              </p>
              <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
                <div>
                  <p className="font-semibold text-foreground">Tipo</p>
                  <p className="mt-1 text-muted-foreground">
                    {activeLine.type}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Para que serve</p>
                  <p className="mt-1 text-muted-foreground">
                    {activeLine.purpose}
                  </p>
                </div>
              </div>
              <span className="mt-5 inline-flex rounded-md bg-background px-3 py-2 text-sm font-semibold text-foreground shadow-sm transition group-hover:translate-x-1">
                Ver linha completa
              </span>
            </div>
            <div className="min-w-0 rounded-md bg-background/70 p-3">
              <Image
                src={activeImage}
                alt={activeLine.featuredAlt}
                width={3072}
                height={2048}
                className="h-auto w-full max-w-full rounded-md object-contain"
                sizes="(max-width: 767px) calc(100vw - 72px), (max-width: 1279px) 45vw, 42vw"
                priority
              />
            </div>
          </div>
        </button>

        <div className="grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {lines.map((line) => (
            <button
              key={line.id}
              type="button"
              className={cn(
                "min-w-0 rounded-lg border bg-card p-4 text-left shadow-sm transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                selectedLine === line.id
                  ? lineAccentClass[line.id]
                  : "border-border text-card-foreground",
              )}
              onClick={() => {
                setSelectedLine(line.id);
                setSlideIndex(0);
              }}
              aria-pressed={selectedLine === line.id}
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {productCountByLine[line.id]} produtos
              </span>
              <span className="mt-1 block text-base font-semibold text-foreground">
                {line.name}
              </span>
              <span className="mt-1 block text-sm text-muted-foreground">
                {line.type}
              </span>
            </button>
          ))}
        </div>
      </div>

      <section
        id={`linha-${activeLine.id}`}
        className="scroll-mt-24"
        aria-labelledby={`heading-${activeLine.id}`}
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-primary">
              Linha selecionada
            </p>
            <h3
              id={`heading-${activeLine.id}`}
              className="mt-2 text-2xl font-semibold text-foreground"
            >
              {activeLine.name}
            </h3>
          </div>
          <p className="text-sm text-muted-foreground">
            {activeProducts.length} produtos organizados por tipo.
          </p>
        </div>

        <div className="mt-6 space-y-7">
          {Object.entries(productsByType).map(([type, typeProducts]) => (
            <div key={type} className="min-w-0">
              <h4 className="text-base font-semibold text-foreground">
                {type}
              </h4>
              <div className="mt-3 grid min-w-0 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {typeProducts.map((productItem) => (
                  <ProductCard key={productItem.slug} product={productItem} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
