import { GitHubLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export const metadata = {
  title: '/projects',
  description: 'Projects I\'ve worked on',
}

type Project = {
  name: string
  description: string
  url?: string
  github: string
  deprecated?: boolean
  contributor?: boolean
}

const PROJECTS: Project[] = [
  {
    name: 'Lagon',
    description: 'Serverless JavaScript Runtime and platform in Rust',
    url: 'https://lagon.app',
    github: 'lagonapp/lagon',
  },
  {
    name: 'next-international',
    description: 'Type-safe internationalization (i18n) for Next.js',
    url: 'https://next-international.vercel.app',
    github: 'QuiiBz/next-international',
  },
  {
    name: 'myip.dev',
    description: 'Minimalist IP and network information tool',
    url: 'https://myip.dev',
    github: 'QuiiBz/myip.dev',
  },
  {
    name: 'tsfuck',
    description: 'Brainfuck interpreter using TypeScript types',
    github: 'QuiiBz/tsfuck'
  },
  {
    name: 'Million',
    description: 'Virtual DOM Replacement for React',
    url: 'https://million.dev',
    github: 'aidenybai/million',
    contributor: true,
  },
  {
    name: 'UnJS',
    description: 'Unified JavaScript Tools',
    url: 'https://unjs.io',
    github: 'unjs',
    contributor: true,
  },
  {
    name: 'tRPC',
    description: 'End-to-end typesafe APIs',
    url: 'https://trpc.io',
    github: 'trpc/trpc',
    deprecated: true,
    contributor: true,
  },
  {
    name: 'dotfiles',
    description: 'My personal dotfiles',
    github: 'QuiiBz/dotfiles',
  },
  {
    name: 'detect-runtime',
    description: 'Detects the current runtime environment',
    github: 'QuiiBz/detect-runtime',
    deprecated: true,
  },
  {
    name: 'particule',
    description: 'Fine-grained atomic React state management library',
    github: 'QuiiBz/particule',
    deprecated: true,
  },
  {
    name: 'influer',
    description: 'A tiny (< 1KB) reactivity library in TS',
    github: 'QuiiBz/influer',
    deprecated: true,
  },
  {
    name: 'niftycss',
    description: 'A CSS-in-TS, framework-agnostic library',
    url: 'https://niftycss.vercel.app',
    github: 'QuiiBz/niftycss',
    deprecated: true,
  },
]

const getGitHubLink = (project: Project) => `https://github.com/${project.github}`
const getMainLink = (project: Project) => project.url || getGitHubLink(project)

type ProjectCardProps = {
  project: Project
  animationDelay: string
}

function ProjectCard({ animationDelay, project }: ProjectCardProps) {
  const mainLink = getMainLink(project)
  const gitHubLink = getGitHubLink(project)
  const showGitHub = gitHubLink !== mainLink

  return (
    <Link href={mainLink} target="_blank" className={`project ${project.deprecated ? 'deprecated' : ''}`} style={{ animationDelay }}>
      <div className="title-container">
        <h2>
          {project.name}
          {showGitHub ? (
            <Link href={gitHubLink} target="_blank">
              <GitHubLogoIcon />
            </Link>
          ) : null}
        </h2>
        {project.contributor ? (
          <span className="contributor-badge">contributor</span>
        ) : null}
      </div>
      <p>{project.description}</p>
    </Link>
  )
}

export default function Projects() {
  return (
    <div className="projects">
      {PROJECTS.map((project, index) => (
        <ProjectCard project={project} animationDelay={`${((index + 2) / 10)}s`} key={project.name} />
      ))}
    </div>
  )
}
