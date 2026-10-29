# Otimização de Desempenho Web — Blog Next.js

## Sobre o projeto

Este projeto consiste em um blog sobre tecnologia, desenvolvido com Next.js, TypeScript e Tailwind CSS.

O objetivo deste exercício foi analisar o desempenho da aplicação, identificar oportunidades de melhoria e realizar ajustes técnicos, utilizando o Lighthouse para avaliar os resultados antes e depois das alterações.

## Tecnologias utilizadas

- Next.js 16
- React
- TypeScript
- Tailwind CSS 4
- ESLint
- Lighthouse

## Diagnóstico inicial

Foi realizada uma análise da aplicação em ambiente de produção utilizando o Lighthouse.

Foram observados:

- Arquivos CSS pequenos.
- Dados dos artigos em arquivo JSON com aproximadamente 1 KB.
- Ausência de imagens pesadas no conteúdo.
- Páginas pré-renderizadas pelo Next.js.
- Estrutura simples e eficiente de componentes.

## Melhorias realizadas

### 1. Acessibilidade

- Correção do idioma principal da página de `en` para `pt-BR`, permitindo a identificação correta do idioma português.

### 2. SEO

- Atualização do título da aplicação.
- Substituição da descrição padrão do Next.js por uma descrição relacionada ao conteúdo do blog.

### 3. Preservação do desempenho

- Manutenção da renderização estática das páginas.
- Preservação do componente de navegação `Link` do Next.js.
- Manutenção da estrutura de componentes e dos estilos existentes.

## Resultados do Lighthouse

As medições realizadas antes e depois das alterações apresentaram as seguintes pontuações:

| Categoria | Antes | Depois |
|---|---:|---:|
| Performance | 100 | 100 |
| Acessibilidade | 100 | 100 |
| Boas práticas | 100 | 100 |
| SEO | 100 | 100 |

O resultado demonstra que as melhorias implementadas foram realizadas sem prejudicar o desempenho da aplicação.

## Relatórios Lighthouse

Os relatórios utilizados na avaliação estão disponíveis na raiz do repositório:

- `lighthouse-antes.html`
- `lighthouse-antes-producao.html`
- `lighthouse-depois.html`

## Conclusão

A análise demonstrou que o projeto já apresentava uma estrutura leve e eficiente. As alterações realizadas aprimoraram a identificação do idioma e os metadados da aplicação, mantendo as pontuações máximas nas quatro categorias avaliadas pelo Lighthouse.

O exercício permitiu praticar análise de desempenho, acessibilidade, SEO, compilação de produção e documentação técnica.

---

Desenvolvido por **Roberta Giovanelli**.