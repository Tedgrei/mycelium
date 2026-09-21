# AGENTS.md

## 1. Objetivo do projeto

Desenvolver um site institucional e catálogo de produtos inspirado na experiência
de navegação do site Atami, mas com identidade visual, textos, imagens e código próprios.

O projeto deve priorizar:

- SEO;
- desempenho;
- acessibilidade;
- responsividade;
- segurança;
- facilidade de manutenção;
- boa experiência do usuário.

Não copiar textos, logotipos, imagens ou outros materiais protegidos de terceiros.

---

## 2. Tecnologias principais

- Next.js com App Router
- React
- TypeScript
- Tailwind CSS
- ESLint
- Vitest e React Testing Library
- Playwright para testes de fluxo
- Zod para validação de dados

Não adicionar bibliotecas sem necessidade comprovada.

Antes de instalar uma dependência:

1. Verificar se o Next.js, React ou TypeScript já oferece a solução.
2. Avaliar manutenção, segurança e tamanho da biblioteca.
3. Registrar a justificativa quando a dependência afetar a arquitetura.
4. Escrever todo o codigo e classes todos em ingles, textos dos site em portugues 
---

## 3. Estrutura do projeto

Usar a seguinte organização como referência:

src/
├── app/                  # Rotas, layouts, páginas e arquivos de SEO
├── components/
│   ├── ui/               # Componentes visuais genéricos
│   ├── layout/           # Header, Footer, Menu e containers
│   └── sections/         # Seções específicas das páginas
├── features/             # Funcionalidades e regras por domínio
├── lib/                  # Integrações e configurações
├── services/             # Comunicação com APIs externas
├── types/                # Tipos TypeScript compartilhados
├── utils/                # Funções utilitárias puras
├── hooks/                # Hooks reutilizáveis
└── styles/               # Estilos globais, quando necessários

Evitar criar pastas, camadas ou abstrações que ainda não tenham uso real.

---

## 4. Princípios de desenvolvimento

### SOLID

Aplicar SOLID de forma prática, sem exagerar nas abstrações:

- Cada componente ou função deve ter uma responsabilidade principal.
- Componentes devem poder ser estendidos sem exigir alterações desnecessárias.
- Implementações substituíveis devem respeitar o mesmo contrato.
- Não obrigar componentes a receber propriedades que não utilizam.
- Regras importantes devem depender de contratos claros, e não de detalhes externos.

SOLID não significa criar uma interface ou classe para cada arquivo.

### KISS

Escolher sempre a solução mais simples que resolva corretamente o problema.

- Preferir código fácil de ler.
- Evitar padrões complexos sem benefício comprovado.
- Não usar soluções “inteligentes” que dificultem a manutenção.

### YAGNI

Não implementar funcionalidades baseadas apenas em uma possibilidade futura.

- Construir somente o que a tarefa atual exige.
- Não criar sistemas genéricos antes de existir mais de um caso real.
- Não adicionar autenticação, banco ou painel administrativo sem necessidade definida.

### DRY

Evitar duplicação de regras e comportamentos importantes.

- Extrair componentes quando houver reutilização real.
- Centralizar constantes, tipos e regras compartilhadas.
- Não criar abstrações apenas porque dois pequenos trechos parecem semelhantes.
- É preferível uma pequena duplicação temporária a uma abstração errada.

---

## 5. Componentes reutilizáveis

Criar componentes reutilizáveis para elementos repetidos, como:

- Button
- Container
- Section
- Heading
- ProductCard
- ArticleCard
- Breadcrumb
- Header
- Footer
- Navigation
- Modal
- FormField

Regras:

- Usar nomes claros e descritivos.
- Manter componentes pequenos e focados.
- Preferir composição em vez de muitas propriedades condicionais.
- Não criar componentes gigantes com várias responsabilidades.
- Separar regra de negócio da apresentação visual.
- Evitar valores fixos quando uma propriedade simples permitir reutilização real.

---

## 6. Next.js e React

- Utilizar o App Router.
- Usar Server Components como padrão.
- Adicionar `"use client"` somente quando houver estado, eventos, hooks do navegador
  ou APIs exclusivas do cliente.
- Não transformar páginas inteiras em Client Components sem necessidade.
- Usar `next/image` para imagens.
- Usar `next/font` para fontes.
- Usar `next/link` para navegação interna.
- Manter chamadas de dados no servidor sempre que possível.
- Implementar estados de carregamento, erro e página não encontrada quando necessários.
- Não acessar diretamente dados sigilosos em componentes do cliente.

---

## 7. TypeScript

- Não utilizar `any`, exceto quando tecnicamente inevitável e justificado.
- Tipar propriedades, parâmetros e retornos importantes.
- Preferir `type` para modelos e propriedades de componentes.
- Usar `interface` quando houver necessidade real de extensão ou contrato.
- Evitar conversões forçadas com `as`.
- Validar dados externos em tempo de execução usando Zod.
- Não duplicar tipos que podem ser derivados de uma fonte confiável.

---

## 8. Estilização

- Usar Tailwind CSS como solução principal.
- Manter consistência de cores, fontes, espaçamentos e bordas.
- Criar tokens visuais para os valores globais do design.
- Evitar estilos inline, exceto quando o valor for realmente dinâmico.
- Evitar classes repetidas excessivamente.
- Não criar cores e espaçamentos diferentes sem justificativa de design.
- Desenvolver primeiro pensando em dispositivos móveis.
- Garantir funcionamento em celular, tablet e desktop.
## shadcn/ui

- Utilizar shadcn/ui como base para componentes de interface acessíveis.
- Instalar apenas os componentes necessários para a tarefa atual.
- Não instalar todos os componentes antecipadamente.
- Personalizar os componentes conforme a identidade visual do projeto.
- Manter os componentes básicos em `src/components/ui`.
- Não editar componentes sem entender onde eles são utilizados.
- Preferir composição em vez de criar componentes com muitas condições.
- Não utilizar shadcn/ui para substituir seções visuais exclusivas do site.
- Se um elemento simples puder ser feito com HTML semântico e Tailwind, não adicionar
  um componente ou dependência desnecessária.
---

## 9. SEO

Cada página pública deve possuir:

- título exclusivo;
- descrição exclusiva;
- URL amigável;
- heading `h1` único;
- hierarquia correta de headings;
- URL canônica quando aplicável;
- conteúdo HTML disponível na renderização inicial;
- imagens com texto alternativo significativo;
- Open Graph e dados para compartilhamento social.

O projeto também deve possuir:

- `robots.ts`;
- `sitemap.ts`;
- `manifest.ts`, quando aplicável;
- dados estruturados em JSON-LD;
- páginas de produto indexáveis;
- breadcrumbs;
- links internos;
- página 404 adequada.

Usar dados estruturados apropriados, como:

- Organization
- WebSite
- BreadcrumbList
- Product
- Article
- FAQPage, somente quando existir FAQ visível na página

Não criar dados estruturados com informações que não aparecem no site.

---

## 10. Performance

- Otimizar imagens e preferir WebP ou AVIF.
- Informar dimensões das imagens para evitar mudanças de layout.
- Carregar com prioridade somente a imagem principal visível.
- Aplicar lazy loading aos elementos fora da primeira tela.
- Evitar JavaScript desnecessário no navegador.
- Evitar animações pesadas.
- Respeitar `prefers-reduced-motion`.
- Evitar dependências grandes para funcionalidades simples.
- Monitorar Core Web Vitals.
- Buscar uma pontuação alta no Lighthouse sem sacrificar acessibilidade ou usabilidade.

---

## 11. Acessibilidade

- Utilizar HTML semântico.
- Garantir navegação por teclado.
- Manter foco visível.
- Associar labels aos campos de formulário.
- Utilizar botões para ações e links para navegação.
- Não usar `div` clicável quando existir um elemento HTML adequado.
- Manter contraste de cores suficiente.
- Adicionar atributos ARIA apenas quando o HTML semântico não for suficiente.
- Fornecer mensagens de erro compreensíveis.
- Garantir que menus e modais possam ser utilizados por teclado.

---

## 12. Segurança

- Nunca incluir senhas, tokens ou credenciais no código.
- Utilizar variáveis de ambiente.
- Não expor variáveis privadas com o prefixo `NEXT_PUBLIC_`.
- Validar e sanitizar entradas recebidas.
- Validar dados também no servidor.
- Não confiar apenas na validação do navegador.
- Não registrar dados pessoais ou credenciais nos logs.
- Evitar renderizar HTML externo com `dangerouslySetInnerHTML`.
- Quando isso for inevitável, sanitizar o conteúdo.
- Manter dependências atualizadas e revisar vulnerabilidades.

---

## 13. Testes

Priorizar testes em funcionalidades críticas:

- validação de formulários;
- filtros e pesquisa;
- navegação;
- regras de produtos;
- integração com APIs;
- geração de metadados importantes;
- fluxos principais do usuário.

Não testar detalhes internos da implementação.

Os testes devem verificar o comportamento observado pelo usuário.

Antes de concluir uma alteração, executar:

npm run lint
npm run test
npm run build

Quando houver um fluxo crítico de interface, executar também:

npm run test:e2e

---

## 14. Refatoração

Refatorar quando isso melhorar claramente:

- legibilidade;
- reutilização;
- testabilidade;
- segurança;
- desempenho;
- separação de responsabilidades.

Antes de refatorar:

1. Compreender o comportamento atual.
2. Criar ou atualizar testes quando a área for crítica.
3. Fazer alterações pequenas.
4. Confirmar que o comportamento não foi alterado por acidente.

Não misturar grandes refatorações com novas funcionalidades, salvo quando necessário.

Não realizar refatoração apenas para aplicar um padrão teórico.

---

## 15. Convenções de código

- Componentes React: PascalCase.
- Funções e variáveis: camelCase.
- Constantes globais: UPPER_SNAKE_CASE.
- Hooks personalizados: iniciar com `use`.
- Propriedades booleanas: iniciar preferencialmente com `is`, `has`, `can` ou `should`.
- Utilizar nomes que expressem intenção.
- Evitar abreviações pouco claras.
- Evitar funções longas.
- Remover código morto e comentários desatualizados.
- Comentários devem explicar decisões, não repetir o código.

---

## 16. Tratamento de erros

- Não ignorar erros silenciosamente.
- Exibir mensagens compreensíveis para o usuário.
- Separar mensagens técnicas das mensagens apresentadas na interface.
- Registrar no servidor informações suficientes para diagnóstico, sem dados sensíveis.
- Prever estados vazios, falhas de rede e indisponibilidade de APIs.
- Usar Error Boundaries e arquivos `error.tsx` quando apropriado.

---

## 17. Git e commits

- Não alterar arquivos sem relação com a tarefa atual.
- Não apagar mudanças existentes sem autorização.
- Criar commits pequenos e com um propósito definido.
- Não versionar `.env`, credenciais, arquivos gerados ou dependências instaladas.
- Atualizar o `.gitignore` quando necessário.

Exemplos de commits:

feat: adiciona catálogo de produtos
fix: corrige menu em dispositivos móveis
refactor: separa regras do filtro de produtos
test: adiciona testes do formulário de contato
docs: atualiza instruções do projeto

---

## 18. Processo para cada tarefa

Antes de programar:

1. Ler este arquivo.
2. Entender a solicitação.
3. Examinar o código relacionado.
4. Escolher a solução mais simples.
5. Identificar possíveis impactos em SEO, acessibilidade e responsividade.

Durante a implementação:

1. Fazer mudanças pequenas e focadas.
2. Reutilizar componentes existentes quando adequado.
3. Manter os tipos corretos.
4. Evitar dependências e abstrações desnecessárias.
5. Preservar o padrão visual do projeto.

Depois da implementação:

1. Revisar o código.
2. Executar lint.
3. Executar os testes relacionados.
4. Executar o build.
5. Verificar a página em diferentes tamanhos de tela.
6. Informar claramente o que foi alterado e como foi validado.

---

## 19. Critérios de conclusão

Uma tarefa só pode ser considerada concluída quando:

- atende ao requisito solicitado;
- não apresenta erros de TypeScript;
- passa no lint;
- passa nos testes relacionados;
- gera o build de produção;
- funciona em celular e desktop;
- preserva ou melhora o SEO;
- mantém acessibilidade básica;
- não contém credenciais;
- não adiciona complexidade desnecessária;
- não quebra funcionalidades existentes.

Caso alguma verificação não possa ser executada, informar isso claramente.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
