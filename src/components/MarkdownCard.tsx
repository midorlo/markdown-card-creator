
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { toast } from "sonner";

interface MarkdownCardProps {
  content: string;
}

export const MarkdownCard = ({ content }: MarkdownCardProps) => {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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

  // Extract the title from the markdown content (first h1)
  const title = content.split('\n')[0].replace('# ', '');

  return (
    <div 
      className="group relative rounded-xl border bg-white/60 shadow-sm transition-all duration-300 hover:shadow-lg animate-fade-up overflow-hidden backdrop-blur-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered ? '0 8px 32px rgba(0, 0, 0, 0.12)' : '0 2px 8px rgba(0, 0, 0, 0.08)'
      }}
    >
      {/* Title bar with Windows 11 style */}
      <div className="bg-[#33C3F0] px-4 py-2.5 text-white font-medium">
        {title}
      </div>
      
      <div className="absolute right-2 top-2 z-10">
        <button
          onClick={copyToClipboard}
          className="rounded-full p-2 text-white transition-all duration-200 hover:bg-white/20"
          aria-label="Copy to clipboard"
        >
          {copied ? (
            <Check className="h-4 w-4 animate-fade-in" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>

      <div className="card-content p-5">
        <div 
          className={`overflow-y-auto transition-all duration-300 ${
            isHovered ? "custom-scrollbar max-h-[500px]" : "hide-scrollbar max-h-[140px]"
          }`}
        >
          <div className={`prose prose-sm max-w-none ${!isHovered ? "fade-bottom" : ""}`}>
            <ReactMarkdown>
              {/* Remove the title from content since we show it separately */}
              {content.split('\n').slice(1).join('\n')}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};
