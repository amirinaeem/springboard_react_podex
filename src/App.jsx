import { Routes, Route, Navigate } from 'react-router-dom'
import Nav from './router/Nav.jsx'
import Pokedex from './components/Pokedex.jsx'
import Pokegame from './components/Pokegame.jsx'
import Blackjack from './components/BlackJack.jsx'

export default function App() {
  return (
    <div className="app-shell">
      <Nav />
      <main className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/pokedex" replace />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokegame" element={<Pokegame />} />
          <Route path="/blackjack" element={<Blackjack />} />
          <Route path="*" element={<h2>Not Found</h2>} />
        </Routes>
      </main>
      <footer className="footer">
        <span>React Props: Pokedex &middot; Blackjack demo</span>
      </footer>
    </div>
  )
}
