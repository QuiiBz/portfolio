'use client'

import { GitHubLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { useState } from "react"

// export const metadata = {
//   title: '/projects',
// }

type Project = {
  name: string
  description: string
  url?: string
  github: string
  deprecated?: boolean
}

const OWN_PROJECTS: Project[] = [
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

const CONTRIBUTED_PROJECTS: Project[] = [
  {
    name: 'Million',
    description: '',
    url: 'https://million.dev',
    github: 'aidenybai/million',
  },
  {
    name: 'UnJS',
    description: '',
    url: 'https://unjs.io',
    github: 'unjs',
  },
  {
    name: 'tRPC',
    description: '',
    url: 'https://trpc.io',
    github: 'trpc/trpc',
    deprecated: true,
  },
]

const getGitHubLink = (project: Project) => `https://github.com/${project.github}`
const getMainLink = (project: Project) => project.url || getGitHubLink(project)

export default function Projects() {
  const [view, setView] = useState<'created' | 'contributed'>('created')
  const projects = view === 'created' ? OWN_PROJECTS : CONTRIBUTED_PROJECTS

  return (
    <div className="projects">
      {projects.map(project => (
        <Link href={getMainLink(project)} target="_blank" className={`project ${project.deprecated ? 'deprecated' : ''}`} key={project.name}>
          <h2>
            {project.name}
            <Link href={getGitHubLink(project)} target="_blank">
              <GitHubLogoIcon />
            </Link>
          </h2>
          <p>{project.description}</p>
        </Link>
      ))}
    </div>
  )
}
