export type ProductHighlight = {
  name: string;
  description: string;
  image: string;
};

export const productHighlights: ProductHighlight[] = [
  {
    name: "Linha Aqua",
    description:
      "Nutrientes minerais para sistemas com alta precisão de condução.",
    image: "/images/products/Mycelium_Aqua_KN_frente_UPSCALE_HD_2x.webp",
  },
  {
    name: "Linha Amazon",
    description:
      "Base completa para desenvolvimento vigoroso em diferentes fases.",
    image: "/images/products/Mycelium_Amazon_Power_HD_3072x2048.webp",
  },
  {
    name: "Substratos",
    description:
      "Misturas e condicionadores para estrutura, aeração e retenção hídrica.",
    image: "/images/products/Mycelium_Coco_3072x2048_HD.webp",
  },
];
