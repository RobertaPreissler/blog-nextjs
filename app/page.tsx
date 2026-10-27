
import Link from "next/link";
import artigos from "../public/data/artigos.json";

type Artigo = {
  slug: string;
  titulo: string;
  descricao: string;
  conteudo: string;
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12">
      <header className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-blue-700">
          Meu Blog de Tecnologia
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Aprendendo programação, TypeScript, Next.js e Inteligência Artificial.
        </p>
      </header>

      <section className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
        {artigos.map((artigo: Artigo) => (
          <article
            key={artigo.slug}
            className="rounded-xl bg-white p-6 shadow"
          >
            <h2 className="text-2xl font-semibold text-gray-900">
              {artigo.titulo}
            </h2>

            <p className="mt-3 text-gray-600">
              {artigo.descricao}
            </p>

            <Link
              href={`/artigos/${artigo.slug}`}
              className="mt-4 inline-block font-semibold text-blue-600 hover:underline"
            >
              Ler artigo →
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
