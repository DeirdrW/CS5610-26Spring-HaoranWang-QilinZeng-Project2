import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/games.css'

export default function Games(){
  return (
    <main>
      <h1 className="section-title" style={{marginTop:0}}>Choose a Mode</h1>
      <p>Different modes have different flavors.</p>
      <section className="selection-list">
        <Link className="selection-card" to="/games/normal">
          <h3>Aries</h3>
          <span>By Espresso Roast</span>
        </Link>
        <Link className="selection-card" to="/games/normal">
          <h3>Taurus</h3>
          <span>By Flat White</span>
        </Link>
        <Link className="selection-card" to="/games/normal">
          <h3>Gemini</h3>
          <span>By Cold Brew</span>
        </Link>
        <Link className="selection-card" to="/games/normal">
          <h3>Cancer</h3>
          <span>By Cortado</span>
        </Link>
        <Link className="selection-card" to="/games/normal">
          <h3>Leo</h3>
          <span>By Mocha Blend</span>
        </Link>
        <Link className="selection-card" to="/games/normal">
          <h3>Virgo</h3>
          <span>By Macchiato</span>
        </Link>
        <Link className="selection-card" to="/games/normal">
          <h3>Libra</h3>
          <span>By Americano</span>
        </Link>
        <Link className="selection-card" to="/games/normal">
          <h3>Scorpio</h3>
          <span>By Affogato</span>
        </Link>
        <Link className="selection-card" to="/games/normal">
          <h3>Sagittarius</h3>
          <span>By Nitro Brew</span>
        </Link>
        <Link className="selection-card" to="/games/normal">
          <h3>Capricorn</h3>
          <span>By Turkish Coffee</span>
        </Link>
        <Link className="selection-card" to="/games/normal">
          <h3>Aquarius</h3>
          <span>By Viennese Roast</span>
        </Link>
        <Link className="selection-card" to="/games/normal">
          <h3>Pisces</h3>
          <span>By Irish Cream</span>
        </Link>
      </section>
    </main>
  )
}
