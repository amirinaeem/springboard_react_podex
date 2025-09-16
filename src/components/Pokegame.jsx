import Pokedex from './Pokedex.jsx'

function shuffled(array) {
  const a = array.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function totalExp(list) {
  return list.reduce((acc, p) => acc + (p.base_experience || 0), 0)
}

export default function Pokegame() {
  // Get the default list from Pokedex.defaultProps
  const all = Pokedex.defaultProps.pokemon
  const deck = shuffled(all)
  const hand1 = deck.slice(0, 4)
  const hand2 = deck.slice(4, 8)

  const exp1 = totalExp(hand1)
  const exp2 = totalExp(hand2)
  const hand1Wins = exp1 > exp2

  return (
    <div className="grid" style={{gridTemplateColumns: '1fr', gap: '22px'}}>
      <Pokedex pokemon={hand1} title="Hand 1" totalExp={exp1} isWinner={hand1Wins} />
      <Pokedex pokemon={hand2} title="Hand 2" totalExp={exp2} isWinner={!hand1Wins} />
    </div>
  )
}
