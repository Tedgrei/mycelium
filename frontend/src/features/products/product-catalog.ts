export type ProductLine =
  | "aqua"
  | "amazon"
  | "amazing"
  | "base"
  | "biomineral"
  | "substrates"
  | "classic";

export type ProductCatalogItem = {
  slug: string;
  name: string;
  line: ProductLine;
  lineName: string;
  type: string;
  purpose: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type ProductLineDetails = {
  id: ProductLine;
  name: string;
  type: string;
  purpose: string;
  description: string;
  featuredImages: string[];
  featuredAlt: string;
};

const catalogImagePath = "/images/products/Catalogo_Mycelium";

export const productLineOrder: ProductLine[] = [
  "aqua",
  "amazon",
  "amazing",
  "base",
  "biomineral",
  "substrates",
  "classic",
];

export const productLineDetails: Record<ProductLine, ProductLineDetails> = {
  aqua: {
    id: "aqua",
    name: "Linha Aqua",
    type: "Ajustes e complementos",
    purpose: "Organizar produtos Aqua por pH, minerais e códigos da própria linha.",
    description: "Produtos Aqua separados por tipo para reduzir a confusão visual do catálogo.",
    featuredImages: [
      `${catalogImagePath}/Mycelium_Aqua_KN_frente_UPSCALE_HD_2x.webp`,
      `${catalogImagePath}/Mycelium_Aqua_pH_plus_Produto_3_UPSCALE_HD_2x.webp`,
      `${catalogImagePath}/Mycelium_Aqua_PK_frente_UPSCALE_HD_2x.webp`,
    ],
    featuredAlt: "Artes frontais de produtos da Linha Aqua Mycelium",
  },
  amazon: {
    id: "amazon",
    name: "Linha Amazon",
    type: "Produtos por etapa",
    purpose: "Agrupar Roots, Power, Finish e Equilibrium dentro da mesma família.",
    description: "Linha Amazon organizada por etapa ou parte indicada no nome do produto.",
    featuredImages: [
      `${catalogImagePath}/Mycelium_Amazon_Roots_HD_3072x2048.webp`,
      `${catalogImagePath}/Mycelium_Amazon_Power_HD_3072x2048.webp`,
      `${catalogImagePath}/Mycelium_Amazon_Finish_HD_3072x2048.webp`,
    ],
    featuredAlt: "Artes frontais de produtos da Linha Amazon Mycelium",
  },
  amazing: {
    id: "amazing",
    name: "Linha Amazing",
    type: "Complementos",
    purpose: "Reunir Bloom, Force, Molasses e Clay Bloom em uma leitura única.",
    description: "Linha Amazing organizada por nomes e etapas indicadas no catálogo.",
    featuredImages: [
      `${catalogImagePath}/Mycelium_Amazing_Bloom_HD_3072x2048.webp`,
      `${catalogImagePath}/Mycelium_Amazing_Clay_Bloom_HD_3072x2048.webp`,
      `${catalogImagePath}/Mycelium_Amazing_Molasses_HD_3072x2048.webp`,
    ],
    featuredAlt: "Artes frontais de produtos da Linha Amazing Mycelium",
  },
  base: {
    id: "base",
    name: "Linha Base",
    type: "Base em duas partes",
    purpose: "Separar Base A e Base B como conjunto próprio.",
    description: "Produtos Base A e Base B apresentados juntos.",
    featuredImages: [
      `${catalogImagePath}/Mycelium_Base_A_3072x2048.webp`,
      `${catalogImagePath}/Mycelium_Base_B_3072x2048.webp`,
    ],
    featuredAlt: "Artes frontais dos produtos Base A e Base B Mycelium",
  },
  biomineral: {
    id: "biomineral",
    name: "Solo Biomineral",
    type: "Programa por etapa",
    purpose: "Agrupar crescimento, floração, raiz e finalizador.",
    description: "Produtos Solo Biomineral organizados pela etapa indicada no nome.",
    featuredImages: [
      `${catalogImagePath}/Mycelium_Crescimento_Parte_A_Solo_Biomineral_3072x2048.webp`,
      `${catalogImagePath}/Mycelium_Floracao_Parte_A_Solo_Biomineral_3072x2048.webp`,
      `${catalogImagePath}/Mycelium_Finalizador_Solo_Biomineral_3072x2048.webp`,
    ],
    featuredAlt: "Artes frontais de produtos Solo Biomineral Mycelium",
  },
  substrates: {
    id: "substrates",
    name: "Substratos",
    type: "Bases de cultivo",
    purpose: "Separar substratos do restante dos produtos.",
    description: "Substratos Mycelium reunidos em uma linha própria.",
    featuredImages: [
      `${catalogImagePath}/Mycelium_Coco_3072x2048_HD.webp`,
      "/images/products/Mycelium_Turfa_de_Spagno_3072x2048_HD.webp",
      "/images/products/Mycelium_Solo_Biomineral_3072x2048_NITIDO.webp",
    ],
    featuredAlt: "Artes frontais de substratos Mycelium",
  },
  classic: {
    id: "classic",
    name: "Linha Mycelium",
    type: "Produtos por fase",
    purpose: "Organizar Raiz, Passagem, Flor, Força e Acabamento.",
    description: "Produtos Mycelium agrupados por etapa indicada no nome.",
    featuredImages: [
      `${catalogImagePath}/Mycelium_Raiz_HD_3072x2048.webp`,
      `${catalogImagePath}/Mycelium_Flor_3072x2048.webp`,
      `${catalogImagePath}/Mycelium_Acabamento_3072x2048.webp`,
    ],
    featuredAlt: "Artes frontais de produtos Mycelium",
  },
};

function product(
  slug: string,
  name: string,
  line: ProductLine,
  type: string,
  purpose: string,
  image: string,
): ProductCatalogItem {
  const lineName = productLineDetails[line].name.replace("Linha ", "");

  return {
    slug,
    name,
    line,
    lineName,
    type,
    purpose,
    description: `Produto ${name} da ${productLineDetails[line].name}.`,
    image,
    imageAlt: `Arte frontal do produto ${name} Mycelium`,
  };
}

export const productCatalog: ProductCatalogItem[] = [
  product("aqua-ca", "Aqua Ca", "aqua", "Complemento mineral", "Identificado para manejo de cálcio.", `${catalogImagePath}/Mycelium_Aqua_Ca_frente_UPSCALE_HD_2x.webp`),
  product("aqua-fe", "Aqua Fe", "aqua", "Complemento mineral", "Identificado para manejo de ferro.", `${catalogImagePath}/Mycelium_Aqua_Fe_frente_UPSCALE_HD_2x.webp`),
  product("aqua-kn", "Aqua KN", "aqua", "Complemento mineral", "Produto Aqua identificado pelo código KN.", `${catalogImagePath}/Mycelium_Aqua_KN_frente_UPSCALE_HD_2x.webp`),
  product("aqua-ks", "Aqua KS", "aqua", "Complemento mineral", "Produto Aqua identificado pelo código KS.", `${catalogImagePath}/Mycelium_Aqua_KS_frente_UPSCALE_HD_2x.webp`),
  product("aqua-mg", "Aqua Mg", "aqua", "Complemento mineral", "Identificado para manejo de magnésio.", `${catalogImagePath}/Mycelium_Aqua_Mg_frente_UPSCALE_HD_2x.webp`),
  product("aqua-micro", "Aqua Micro", "aqua", "Micronutrientes", "Produto Aqua identificado como Micro.", `${catalogImagePath}/Mycelium_Aqua_Micro_frente_UPSCALE_HD_2x.webp`),
  product("aqua-ph-minus", "Aqua pH -", "aqua", "Ajuste de pH", "Identificado para redução de pH.", `${catalogImagePath}/Mycelium_Aqua_pH_N_Produto_1_HD_3072x2048_v2.webp`),
  product("aqua-ph-plus", "Aqua pH +", "aqua", "Ajuste de pH", "Identificado para elevação de pH.", `${catalogImagePath}/Mycelium_Aqua_pH_plus_Produto_3_UPSCALE_HD_2x.webp`),
  product("aqua-ph-p", "Aqua pH P", "aqua", "Ajuste de pH", "Produto Aqua identificado como pH P.", `${catalogImagePath}/Mycelium_Aqua_pH_P_Produto_2_HD_3072x2048_v2.webp`),
  product("aqua-pk", "Aqua PK", "aqua", "Complemento mineral", "Produto Aqua identificado pelo código PK.", `${catalogImagePath}/Mycelium_Aqua_PK_frente_UPSCALE_HD_2x.webp`),
  product("amazon-equilibrium-a", "Amazon Equilibrium A", "amazon", "Parte A", "Parte A do conjunto Equilibrium.", `${catalogImagePath}/Mycelium_Amazon_Equilibrium_A_HD_3072x2048.webp`),
  product("amazon-equilibrium-b", "Amazon Equilibrium B", "amazon", "Parte B", "Parte B do conjunto Equilibrium.", `${catalogImagePath}/Mycelium_Amazon_Equilibrium_B_HD_3072x2048.webp`),
  product("amazon-finish", "Amazon Finish", "amazon", "Finalização", "Identificado para etapa final.", `${catalogImagePath}/Mycelium_Amazon_Finish_HD_3072x2048.webp`),
  product("amazon-power", "Amazon Power", "amazon", "Desenvolvimento", "Produto Amazon identificado como Power.", `${catalogImagePath}/Mycelium_Amazon_Power_HD_3072x2048.webp`),
  product("amazon-roots", "Amazon Roots", "amazon", "Raiz", "Identificado para etapa de raiz.", `${catalogImagePath}/Mycelium_Amazon_Roots_HD_3072x2048.webp`),
  product("amazing-bloom", "Amazing Bloom", "amazing", "Floração", "Produto Amazing identificado para floração.", `${catalogImagePath}/Mycelium_Amazing_Bloom_HD_3072x2048.webp`),
  product("amazing-clay-bloom", "Amazing Clay Bloom", "amazing", "Floração", "Produto Amazing identificado como Clay Bloom.", `${catalogImagePath}/Mycelium_Amazing_Clay_Bloom_HD_3072x2048.webp`),
  product("amazing-force", "Amazing Force", "amazing", "Força", "Produto Amazing identificado como Force.", `${catalogImagePath}/Mycelium_Amazing_Force_HD_3072x2048.webp`),
  product("amazing-molasses", "Amazing Molasses", "amazing", "Complemento", "Produto Amazing identificado como Molasses.", `${catalogImagePath}/Mycelium_Amazing_Molasses_HD_3072x2048.webp`),
  product("base-a", "Base A", "base", "Parte A", "Parte A da Linha Base.", `${catalogImagePath}/Mycelium_Base_A_3072x2048.webp`),
  product("base-b", "Base B", "base", "Parte B", "Parte B da Linha Base.", `${catalogImagePath}/Mycelium_Base_B_3072x2048.webp`),
  product("solo-biomineral-crescimento-a", "Crescimento Parte A Solo Biomineral", "biomineral", "Crescimento", "Parte A para etapa de crescimento.", `${catalogImagePath}/Mycelium_Crescimento_Parte_A_Solo_Biomineral_3072x2048.webp`),
  product("solo-biomineral-crescimento-b", "Crescimento Parte B Solo Biomineral", "biomineral", "Crescimento", "Parte B para etapa de crescimento.", `${catalogImagePath}/Mycelium_Crescimento_Parte_B_Solo_Biomineral_3072x2048.webp`),
  product("solo-biomineral-finalizador", "Finalizador Solo Biomineral", "biomineral", "Finalização", "Identificado para etapa de finalização.", `${catalogImagePath}/Mycelium_Finalizador_Solo_Biomineral_3072x2048.webp`),
  product("solo-biomineral-floracao-a", "Floração Parte A Solo Biomineral", "biomineral", "Floração", "Parte A para etapa de floração.", `${catalogImagePath}/Mycelium_Floracao_Parte_A_Solo_Biomineral_3072x2048.webp`),
  product("solo-biomineral-floracao-b", "Floração Parte B Solo Biomineral", "biomineral", "Floração", "Parte B para etapa de floração.", `${catalogImagePath}/Mycelium_Floracao_Parte_B_Solo_Biomineral_3072x2048.webp`),
  product("raiz-solo-biomineral", "Raiz Solo Biomineral", "biomineral", "Raiz", "Identificado para etapa de raiz.", "/images/products/Mycelium_Raiz_Solo_Biomineral_3072x2048.webp"),
  product("coco", "Coco", "substrates", "Substrato", "Base de cultivo identificada como Coco.", `${catalogImagePath}/Mycelium_Coco_3072x2048_HD.webp`),
  product("turfa-de-spagno", "Turfa de Spagno", "substrates", "Substrato", "Base de cultivo identificada como Turfa de Spagno.", "/images/products/Mycelium_Turfa_de_Spagno_3072x2048_HD.webp"),
  product("solo-biomineral", "Solo Biomineral", "substrates", "Substrato", "Base de cultivo identificada como Solo Biomineral.", "/images/products/Mycelium_Solo_Biomineral_3072x2048_NITIDO.webp"),
  product("acabamento", "Acabamento", "classic", "Finalização", "Produto Mycelium identificado para acabamento.", `${catalogImagePath}/Mycelium_Acabamento_3072x2048.webp`),
  product("flor", "Flor", "classic", "Floração", "Produto Mycelium identificado como Flor.", `${catalogImagePath}/Mycelium_Flor_3072x2048.webp`),
  product("flores-magicas", "Flores Mágicas", "classic", "Floração", "Produto Mycelium identificado como Flores Mágicas.", `${catalogImagePath}/Mycelium_Flores_Magicas_3072x2048.webp`),
  product("forca", "Força", "classic", "Desenvolvimento", "Produto Mycelium identificado como Força.", `${catalogImagePath}/Mycelium_Forca_3072x2048.webp`),
  product("passagem", "Passagem", "classic", "Transição", "Produto Mycelium identificado para passagem de etapa.", `${catalogImagePath}/Mycelium_Passagem_3072x2048.webp`),
  product("raiz", "Raiz", "classic", "Raiz", "Produto Mycelium identificado como Raiz.", `${catalogImagePath}/Mycelium_Raiz_HD_3072x2048.webp`),
];
