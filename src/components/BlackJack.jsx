import { useEffect, useMemo, useState } from 'react'

/**
 * Deck of Cards API static image filenames use:
 *  - Suits: S (Spades), H (Hearts), D (Diamonds), C (Clubs)
 *  - Ranks: A, 2..9, 0 (for 10), J, Q, K
 * Image URL pattern: https://deckofcardsapi.com/static/img/<RANK><SUIT>.png
 * Example: 9H.png, AS.png, 0C.png
 */

const SUITS = ['S', 'H', 'D', 'C']
const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K'] // '0' = ten

function drawTwoDistinct() {
  const picks = new Set()
  while (picks.size < 2) {
    const s = SUITS[Math.floor(Math.random() * SUITS.length)]
    const r = RANKS[Math.floor(Math.random() * RANKS.length)]
    picks.add(`${r}${s}`)
  }
  return Array.from(picks)
}

function cardScore(rank) {
  if (rank === 'A') return 11
  if (rank === '0' || rank === 'J' || rank === 'Q' || rank === 'K') return 10
  return parseInt(rank, 10) // 2..9
}

function parseRank(code) {
  // code like 'AS', '9H', '0D'
  return code[0]
}
function imgUrl(code) {
  return `https://deckofcardsapi.com/static/img/${code}.png`
}

export default function Blackjack() {
  const [cards, setCards] = useState(() => drawTwoDistinct())

  // only deal on mount; refresh the browser to redraw (as per spec)
  useEffect(() => {
    // intentionally empty
  }, [])

  const total = useMemo(() => {
    const [r1, r2] = cards.map(parseRank)
    return cardScore(r1) + cardScore(r2)
  }, [cards])

  const blackjack = total === 21

  return (
    <section className="blackjack-wrap panel">
      <div className="deck-title">
        <h2>Blackjack (2-card deal)</h2>
        <span className="deck-sub">Aces are 11; 10/J/Q/K are 10.</span>
      </div>

      <div className="cards-row">
        {cards.map(code => (
          <div key={code} className="playing-card">
            <img src={imgUrl(code)} alt={`Card ${code}`} loading="eager" />
          </div>
        ))}
      </div>

      <div className="deck-title" style={{marginTop: 6}}>
        <div className="total">Total: {total}</div>
        {blackjack && <div className="blackjack">BLACKJACK! 🎉</div>}
      </div>

      <p className="deck-sub">
        Want different cards? Refresh the page.
      </p>
    </section>
  )
}
