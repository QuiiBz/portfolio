import { Project } from "~/data";

const PROJECTS: Project[] = [
  {
    name: "Lagon",
    description: "JavaScript Runtime for Edge Functions in Rust",
    url: "https://lagon.app",
    github: "lagonapp/lagon",
    note: "acquired by Vercel",
  },
  {
    name: "next-international",
    description: "Type-safe internationalization (i18n) for Next.js",
    url: "https://next-international.vercel.app",
    github: "QuiiBz/next-international",
  },
  {
    name: "OG Studio",
    description: "Figma-like OG (Open Graph) Image builder",
    url: "https://ogstudio.app",
    github: "QuiiBz/ogstudio",
  },
  {
    name: "Sherif",
    description: "Opinionated, zero-config linter for JavaScript monorepos",
    github: "QuiiBz/sherif",
  },
  {
    name: "myip.dev",
    description: "Minimalist IP and network information tool",
    url: "https://myip.dev",
    github: "QuiiBz/myip.dev",
  },
  {
    name: "Typehero",
    description: "Learn TypeScript by doing challenges",
    url: "https://typehero.dev",
    github: "typehero/typehero",
    note: "contributor",
  },
  {
    name: "UnJS",
    description: "Unified JavaScript Tools",
    url: "https://unjs.io",
    github: "unjs",
    note: "contributor",
  },
  {
    name: "Million",
    description: "Virtual DOM Replacement for React",
    url: "https://million.dev",
    github: "aidenybai/million",
    deprecated: true,
    note: "contributor",
  },
  {
    name: "tRPC",
    description: "End-to-end typesafe APIs",
    url: "https://trpc.io",
    github: "trpc/trpc",
    deprecated: true,
    note: "contributor",
  },
  {
    name: "tsfuck",
    description: "Brainfuck interpreter using TypeScript types",
    github: "QuiiBz/tsfuck",
  },
  {
    name: "dotfiles",
    description: "My personal dotfiles",
    github: "QuiiBz/dotfiles",
  },
  {
    name: "portfolio",
    description: "This very website",
    url: "https://tom.lnrd.fr",
    github: "QuiiBz/portfolio",
  },
  {
    name: "detect-runtime",
    description: "Detects the current runtime environment",
    github: "QuiiBz/detect-runtime",
    deprecated: true,
  },
  {
    name: "particule",
    description: "Fine-grained atomic React state management library",
    github: "QuiiBz/particule",
    deprecated: true,
  },
  {
    name: "influer",
    description: "A tiny (< 1KB) reactivity library in TS",
    github: "QuiiBz/influer",
    deprecated: true,
  },
  {
    name: "niftycss",
    description: "A CSS-in-TS, framework-agnostic library",
    url: "https://niftycss.vercel.app",
    github: "QuiiBz/niftycss",
    deprecated: true,
  },
];

export default defineEventHandler(() => {
  return PROJECTS;
});
