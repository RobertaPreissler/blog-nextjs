
import Link from "next/link";
import { notFound } from "next/navigation";
import artigos from "../../../public/data/artigos.json";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return artigos.map((artigo) => ({
    slug: artigo.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const artigo = artigos.find((item) => item.slug === slug);

  if (!artigo) {
    return {
      title: "Artigo não encontrado",
      description: "O artigo solicitado não foi encontrado.",
    };
  }

  return {
    title: artigo.titulo,
    description: artigo.descricao,
  };
}

export default async function PaginaArtigo({ params }: Props) {
  const { slug } = await params;
  const artigo = artigos.find((item) => item.slug === slug);

  if (!artigo) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl p-8">
      <Link href="/" className="text-blue-600 hover:underline">
        ← Voltar para o início
      </Link>

      <article className="mt-8">
        <h1 className="mb-4 text-3xl font-bold">
          {artigo.titulo}
        </h1>

        <p className="mb-2 text-gray-600">
          {artigo.descricao}
        </p>

        <p className="mb-6 text-sm text-gray-500">
          Por {artigo.autor} · Publicado em{" "}
          {new Date(
            artigo.dataPublicacao + "T12:00:00"
          ).toLocaleDateString("pt-BR")}
        </p>

        <img
          src="/capa-tecnologia.png"
          alt="Ilustração sobre programação e inteligência artificial"
          className="mb-8 h-auto w-full rounded-lg"
        />

        <div className="text-lg leading-8">
          {artigo.conteudo}
        </div>
      </article>
    </main>
  );
}
