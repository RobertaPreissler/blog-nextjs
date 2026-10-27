
import artigos from "../../../public/data/artigos.json";
import Link from "next/link";
import { notFound } from "next/navigation";

type Artigo = {
  slug: string;
  titulo: string;
  descricao: string;
  conteudo: string;
};

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return artigos.map((artigo: Artigo) => ({
    slug: artigo.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const artigo = artigos.find((item: Artigo) => item.slug === slug);

  if (!artigo) {
    return { title: "Artigo não encontrado" };
  }

  return {
    title: artigo.titulo,
    description: artigo.descricao,
  };
}

export default async function PaginaArtigo({ params }: Props) {
  const { slug } = await params;
  const artigo = artigos.find((item: Artigo) => item.slug === slug);

  if (!artigo) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12">
      <article className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Voltar para o início
        </Link>

        <h1 className="mt-8 text-3xl font-bold text-gray-900">
          {artigo.titulo}
        </h1>

        <p className="mt-4 text-gray-600">
          {artigo.descricao}
        </p>

        <p className="mt-6 leading-8 text-gray-800">
          {artigo.conteudo}
        </p>
      </article>
    </main>
  );
}
