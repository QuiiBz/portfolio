export const metadata = {
  title: '/about',
  description: 'About me, myself and I'
}

export default function Home() {
  return (
    <div className="container">
      <p className="subtitle">
        crafting softwares at <img src="/scaleway.png" alt="Scaleway logo" className="icon" /> Scaleway
        <span className="prev">
          <span className="exp">2021 ⸺ Scaleway</span>
          <span className="exp">2021 ⸺ Fig</span>
        </span>
      </p>
      <p className="subtitle">enjoys Cloud and Open-Source</p>
      <p className="subtitle">lives in 🇫🇷 Paris</p>
    </div>
  )
}
