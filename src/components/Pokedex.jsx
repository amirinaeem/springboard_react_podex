import Pokecard from './Pokecard.jsx'

function sumExp(list) {
  return list.reduce((acc, p) => acc + (p.base_experience || 0), 0)
}

export default function Pokedex({ pokemon, title = 'Pokedex', totalExp, isWinner = false }) {
  const computedTotal = totalExp ?? sumExp(pokemon)

  return (
    <section className="panel" aria-label={title}>
      <div className="deck-title">
        <h2>{title}</h2>
        <span className="deck-sub">Total EXP: {computedTotal}</span>
      </div>

      <div className="grid">
        {pokemon.map(p => <Pokecard key={p.id} {...p} />)}
      </div>

      {isWinner ? (
        <div className="winner-badge">THIS HAND WINS!</div>
      ) : (
        totalExp !== undefined && <div className="loser-badge">Nice try — not the winning hand.</div>
      )}
    </section>
  )
}

/** Default list via defaultProps, as requested */
Pokedex.defaultProps = {
  pokemon: [
    { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
    { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
    { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
    { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
    { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
    { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
    { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
    { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
  ]
}
