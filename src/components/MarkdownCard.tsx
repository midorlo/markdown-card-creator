
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { toast } from "sonner";

interface MarkdownCardProps {
  content: string;
}

export const MarkdownCard = ({ content }: MarkdownCardProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      toast.success("In die Zwischenablage kopiert");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Fehler beim Kopieren");
    }
  };

  return (
    <div className="group relative rounded-lg border bg-card p-4 shadow-sm transition-all duration-300 hover:shadow-md animate-fade-up">
      <div className="absolute right-2 top-2 z-10">
        <button
          onClick={copyToClipboard}
          className="rounded-full p-2 text-gray-500 transition-all duration-200 hover:bg-secondary hover:text-gray-700"
          aria-label="Copy to clipboard"
        >
          {copied ? (
            <Check className="h-4 w-4 animate-fade-in" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
      <div className="card-content">
        <div className="max-h-[300px] overflow-y-auto hide-scrollbar pr-4">
          <div className="prose prose-sm max-w-none fade-bottom">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};
