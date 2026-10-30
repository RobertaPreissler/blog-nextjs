# Otimização de Desempenho Web — Blog Next.js

## Sobre o projeto

Este projeto consiste em um blog sobre tecnologia, desenvolvido com Next.js, React, TypeScript e Tailwind CSS.

O objetivo deste exercício foi analisar o desempenho da aplicação, identificar oportunidades de melhoria e implementar otimizações, utilizando o Lighthouse para avaliar os resultados antes e depois das alterações.

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
- Dados dos artigos armazenados em arquivo JSON.
- Páginas pré-renderizadas pelo Next.js.
- Estrutura simples de componentes.
- Oportunidade de otimização do carregamento de imagens.

## Melhorias realizadas

### 1. Acessibilidade

- Configuração do idioma principal da aplicação para `pt-BR`, permitindo a identificação correta do idioma português.

### 2. SEO

- Atualização do título da aplicação.
- Substituição da descrição padrão do Next.js por uma descrição relacionada ao conteúdo do blog.

### 3. Otimização de imagens

Foi adicionada uma imagem de capa relacionada à programação e à inteligência artificial nos artigos.

Inicialmente, a imagem foi implementada utilizando a tag HTML `<img>`.

Em seguida, foi realizada a substituição pelo componente `Image` do Next.js (`next/image`), com:

- Definição das dimensões da imagem.
- Configuração da propriedade `sizes`.
- Redimensionamento responsivo.
- Utilização dos recursos de otimização de imagens do Next.js.

Essa alteração permite que o Next.js otimize a entrega da imagem conforme as necessidades do dispositivo.

### 4. Preservação do desempenho

- Manutenção da renderização estática das páginas.
- Preservação do componente `Link` do Next.js.
- Manutenção da estrutura de componentes e dos estilos existentes.

## Resultados do Lighthouse

Foram realizadas medições em ambiente de produção, utilizando o dispositivo Mobile e a categoria Performance.

| Categoria | Medição inicial | Medição posterior |
|---|---:|---:|
| Performance | 72 | 74 |
| Acessibilidade | 95 | 95 |
| Boas práticas | 96 | 100 |
| SEO | 100 | 100 |

A pontuação de Performance apresentou uma diferença de 2 pontos entre as medições.

**Observação:** as medições não foram realizadas exatamente nas mesmas condições: a medição posterior foi repetida em janela InPrivate, sem extensões do navegador