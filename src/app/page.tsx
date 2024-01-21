import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = () => {
    return snippets.map((snippet) => (
      <div key={snippet.id}>{snippet.title}</div>
    ))
  }
  return (
    <div>
      {renderedSnippets()}
    </div>
  );
}
