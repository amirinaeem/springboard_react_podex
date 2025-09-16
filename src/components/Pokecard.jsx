export default function Pokecard({ id, name, type, base_experience }) {
  const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  return (
    <article className="card" aria-label={`${name} card`}>
      <div className="pokecard-img">
        <img src={imgSrc} alt={name} loading="lazy" />
      </div>
      <div className="pokecard-name">{name}</div>
      <div className="pokecard-meta">
        <span>Type: {type}</span>
        <span>EXP: {base_experience}</span>
      </div>
    </article>
  )
}
