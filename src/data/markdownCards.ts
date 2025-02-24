export interface MarkdownCard {
  id: string;
  content: string;
  color?: string; // Add color property
  metadata?: {
    title?: string;
    author?: string;
    date?: string;
    tags?: string[];
  };
}

export const markdownCards: MarkdownCard[] = [
  {
    id: "example-1",
    content: "# Beispiel 1\nDies ist eine einfache Markdown-Karte mit einer Überschrift.",
    color: "#3498db", // Assign color
    metadata: {
      title: "Beispiel 1",
      author: "System",
      tags: ["example", "simple"]
    }
  },
  {
    id: "example-2",
    content: "# Längerer Text\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    color: "#e74c3c", // Assign color
    metadata: {
      title: "Längerer Text",
      author: "System",
      tags: ["example", "long"]
    }
  },
  {
    id: "example-3",
    content: "# Code Beispiel\n```javascript\nconst greeting = 'Hello World';\nconsole.log(greeting);\n```",
    color: "#2ecc71", // Assign color
    metadata: {
      title: "Code Beispiel",
      author: "System",
      tags: ["example", "code"]
    }
  }
];
