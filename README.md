# Blog Next.js — Desenvolvimento e Otimização de Performance

## Sobre o projeto

Este projeto consiste no desenvolvimento de um blog utilizando Next.js, com páginas de artigos dinâmicas, organização de dados em JSON, renderização estática e otimização de desempenho.

O objetivo da atividade é aplicar técnicas de otimização de performance e avaliar os resultados por meio da ferramenta Lighthouse, comparando as métricas antes e depois das melhorias.

## Tecnologias utilizadas

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- HTML
- JSON
- Lighthouse
- Git e GitHub

## Funcionalidades implementadas

- Página inicial do blog.
- Páginas individuais para os artigos.
- Rotas dinâmicas utilizando App Router.
- Dados dos artigos organizados em arquivo JSON.
- Geração de páginas estáticas.
- Metadados individuais para os artigos.
- Navegação entre páginas utilizando o componente Link do Next.js.
- Exibição de imagem de capa otimizada.

## Estrutura do projeto

```text
blog-nextjs/
├── app/
│   ├── artigos/
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
│   ├── data/
│   │   └── artigos.json
│   └── capa-tecnologia.png
├── lighthouse-antes.html
├── lighthouse-depois.html
├── package.json
└── README.md
```

## Otimização de performance

Foi realizado um diagnóstico utilizando o Lighthouse para identificar oportunidades de melhoria no carregamento da aplicação.

### 1. Diagnóstico inicial

Na primeira versão, a imagem de capa era exibida utilizando o elemento HTML `<img>`.

Essa implementação foi utilizada como referência inicial para avaliar o desempenho da página.

**Pontuação inicial de Performance: 74 pontos.**

### 2. Otimização aplicada

O elemento HTML `<img>` foi substituído pelo componente `Image` do Next.js.

Foram aplicadas as seguintes melhorias:

- Utilização do componente `Image` de `next/image`.
- Definição explícita das dimensões da imagem.
- Configuração da propriedade `sizes` para dimensionamento responsivo.
- Utilização do otimizador de imagens do Next.js.
- Preservação da estrutura da página e da renderização estática.

Código utilizado:

```tsx
<Image
  src="/capa-tecnologia.png"
  alt="Ilustração sobre programação e inteligência artificial"
  width={1536}
  height={1024}
  sizes="(max-width: 768px) 100vw, 768px"
  className="mb-8 h-auto w-full rounded-lg"
/>
```

### 3. Comparação dos resultados do Lighthouse

| Categoria | Antes | Depois |
|---|---:|---:|
| Performance | 74 | 96 |
| Acessibilidade | 95 | 95 |
| Práticas recomendadas | 100 | 100 |
| SEO | 100 | 100 |

A pontuação de Performance aumentou de 74 para 96 pontos, representando uma evolução de 22 pontos.

### 4. Métricas detalhadas após a otimização

| Métrica | Resultado |
|---|---:|
| First Contentful Paint (FCP) | 0,8 s |
| Largest Contentful Paint (LCP) | 2,4 s |
| Total Blocking Time (TBT) | 140 ms |
| Cumulative Layout Shift (CLS) | 0 |
| Speed Index