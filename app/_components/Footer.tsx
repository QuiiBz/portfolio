'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function Footer() {
  const pathname = usePathname()

  const getLinkStyle = (url: string) => {
    return `link${url === pathname ? ' active' : ''}`
  }

  return (
    <nav className="bottom-nav">
      <Link className={getLinkStyle('/')} href="/">/home</Link>
      {/* <Link className={getLinkStyle('/about')} href="/about">/about</Link> */}
      <Link className={getLinkStyle('/projects')} href="/projects">/projects</Link>
    </nav>
  )
}
