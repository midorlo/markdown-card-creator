
export interface MarkdownCard {
  id: string;
  content: string;
  metadata?: {
    title?: string;
    author?: string;
    date?: string;
    tags?: string[];
    // Add more metadata fields as needed
  };
}

export const markdownCards: MarkdownCard[] = [
  {
    id: "example-1",
    content: "# Beispiel 1\nDies ist eine einfache Markdown-Karte mit einer Überschrift.",
    metadata: {
      title: "Beispiel 1",
      author: "System",
      tags: ["example", "simple"]
    }
  },
  {
    id: "example-2",
    content: "# Längerer Text\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\n## Zweite Überschrift\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    metadata: {
      title: "Längerer Text",
      author: "System",
      tags: ["example", "long"]
    }
  },
  {
    id: "example-3",
    content: "# Code Beispiel\n```javascript\nconst greeting = 'Hello World';\nconsole.log(greeting);\n```",
    metadata: {
      title: "Code Beispiel",
      author: "System",
      tags: ["example", "code"]
    }
  }
];
