import { MarkdownCard } from "@/components/MarkdownCard";
import { markdownCards } from "@/data/markdownCards";
import { useState, useEffect } from "react";

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      <button 
        className="mb-4 p-2 bg-gray-800 text-white rounded" 
        onClick={toggleDarkMode}
      >
        Toggle Dark Mode
      </button>
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
