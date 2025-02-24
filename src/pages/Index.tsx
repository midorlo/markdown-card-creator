
import { MarkdownCard } from "@/components/MarkdownCard";

const exampleCards = [
  {
    content: "# Beispiel 1\nDies ist eine einfache Markdown-Karte mit einer Überschrift.",
  },
  {
    content: "# Längerer Text\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\n## Zweite Überschrift\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    content: "# Code Beispiel\n```javascript\nconst greeting = 'Hello World';\nconsole.log(greeting);\n```",
  },
];

const Index = () => {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-semibold">Markdown Karten</h1>
      <div className="grid gap-4">
        {exampleCards.map((card, index) => (
          <MarkdownCard key={index} content={card.content} />
        ))}
      </div>
    </div>
  );
};

export default Index;
