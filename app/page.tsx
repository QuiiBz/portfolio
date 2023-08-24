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
      <p className="subtitle">
        crafting softwares at <img src="/scaleway.png" alt="Scaleway logo" className="icon" /> Scaleway
        <span className="prev">
          <span className="exp" data-desc="Frontend developer">2021 ⸺ <Link href="https://scaleway.com" target="_blank">Scaleway</Link></span>
          <span className="exp" data-desc="Engine & open-source">2021 ⸺ <Link href="https://fig.io" target="_blank">Fig</Link></span>
        </span>
      </p>
      <p className="subtitle">enjoys Cloud and Open-Source</p>
      <p className="subtitle">lives in 🇫🇷 Paris</p>
    </div>
  )
}
