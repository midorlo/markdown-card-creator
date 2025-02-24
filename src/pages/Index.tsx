
import { MarkdownCard } from "@/components/MarkdownCard";
import { markdownCards } from "@/data/markdownCards";

const Index = () => {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-semibold">Markdown Karten</h1>
      <div className="grid gap-4">
        {markdownCards.map((card) => (
          <MarkdownCard key={card.id} content={card.content} />
        ))}
      </div>
    </div>
  );
};

export default Index;
