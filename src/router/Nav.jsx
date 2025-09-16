import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <header className="nav">
      <div className="brand">Pokedex<span className="amp">&nbsp;&amp;&nbsp;</span>Blackjack</div>
      <nav>
        <NavLink className="navlink" to="/pokedex">Pokedex</NavLink>
        <NavLink className="navlink" to="/pokegame">Pokegame</NavLink>
        <NavLink className="navlink" to="/blackjack">Blackjack</NavLink>
      </nav>
    </header>
  )
}
