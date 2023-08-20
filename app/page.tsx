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
      <h2 className="subtitle">crafting softwares with cool tech</h2>
    </div>
  )
}
