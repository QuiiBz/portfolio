import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export const metadata = {
  title: 'tom lienard',
  description: 'My personal website'
}

const TOM = 'tom'.split('')
const LIENARD = 'lienard'.split('')

export default function Home() {
  return (
    <div className="container">
      <h1 className="title">
        {TOM.map((letter, index) => (
          <span style={{ animationDelay: `${(index + 2) / 10}s` }} key={`${letter}-${index}`}>{letter}</span>
        ))}
        <br />
        {LIENARD.map((letter, index) => (
          <span style={{ animationDelay: `${(index + 4) / 10}s` }} key={`${letter}-${index}`}>{letter}</span>
        ))}
      </h1>
      <p className="subtitle" style={{ animationDelay: '1s' }}>
        crafting softwares at <img src="/scaleway.png" alt="Scaleway logo" className="icon" /> Scaleway
        <span className="prev">
          <span className="exp" data-desc="Frontend developer">2021 ⸺ <Link href="https://scaleway.com" target="_blank">Scaleway</Link></span>
          <span className="exp" data-desc="Engine & open-source">2021 ⸺ <Link href="https://fig.io" target="_blank">Fig</Link></span>
        </span>
      </p>
      <p className="subtitle" style={{ animationDelay: '1.1s' }}>enjoys Cloud and Open-Source</p>
      <p className="subtitle" style={{ animationDelay: '1.2s' }}>lives in 🇫🇷 Paris</p>
      <p className="subtitle socials" style={{ animationDelay: '1.3s' }}>
        <Link href="https://github.com/QuiiBz" target="_blank">
          <GitHubLogoIcon />
        </Link>
        <Link href="https://twitter.com/tomlienard" target="_blank">
          <TwitterLogoIcon />
        </Link>
        <Link href="https://linkedin.com/in/tom-lienard/" target="_blank">
          <LinkedInLogoIcon />
        </Link>
      </p>
    </div>
  )
}
