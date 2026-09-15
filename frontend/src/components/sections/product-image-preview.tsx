"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useId, useState } from "react";

type ProductImagePreviewProps = {
  src: string;
  alt: string;
  modalTitle: string;
  sizes: string;
  priority?: boolean;
  width?: number;
  height?: number;
  buttonClassName?: string;
  imageClassName?: string;
};

export function ProductImagePreview({
  src,
  alt,
  modalTitle,
  sizes,
  priority = false,
  width = 3072,
  height = 2048,
  buttonClassName = "",
  imageClassName = "",
}: ProductImagePreviewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className={`group relative block w-full min-w-0 cursor-zoom-in overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${buttonClassName}`}
        aria-label={`Ampliar imagem: ${alt}`}
        title="Ampliar imagem"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`block h-auto w-full max-w-full object-contain object-center transition duration-200 group-hover:brightness-[1.03] ${imageClassName}`}
          priority={priority}
          sizes={sizes}
        />
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/75 p-5 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl min-w-0"
            onClick={(event) => event.stopPropagation()}
          >
            <h2 id={titleId} className="sr-only">
              {modalTitle}
            </h2>
            <div className="mb-3 flex justify-end">
              <button
                type="button"
                className="inline-flex size-10 items-center justify-center rounded-md border border-border bg-background text-foreground shadow-sm transition hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Fechar imagem ampliada"
                onClick={() => setIsOpen(false)}
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="mx-auto block h-auto max-h-[82vh] w-auto max-w-full rounded-lg bg-background object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
