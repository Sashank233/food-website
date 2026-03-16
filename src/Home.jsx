import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className="home">

      <header className="hero">
        <h1>Welcome to Italian Flavors</h1>
        <p>
          Experience the soul of Italy through timeless recipes,
          fresh ingredients, and culinary traditions passed down for generations.
        </p>
      </header>

      {/* Image Showcase */}
      <section className="image-strip">
        <img src="/pasta.jpg" alt="Italian pasta" />
        <img src="/pizza.jpg" alt="Italian pizza" />
        <img src="/hotel.jpg" alt="Italian dining table" />
      </section>

      {/* History Section */}
      <section className="history">
        <h2>The Story of Italian Cuisine</h2>
        <p>
          Italian cuisine dates back over 2,000 years, shaped by Roman traditions,
          regional agriculture, and Mediterranean influences. From the olive groves
          of Tuscany to the coastal seafood of Sicily, each region contributes its
          own flavors and techniques.
        </p>
        <p>
          Authentic Italian cooking celebrates simplicity — fresh tomatoes, basil,
          olive oil, artisan cheeses, and handmade pasta come together to create
          dishes loved across the world.
        </p>
      </section>

      {/* Culture Section */}
      <section className="culture">
        <h2>More Than Food — A Way of Life</h2>
        <p>
          In Italy, meals are moments of connection. Families gather around the table,
          recipes are treasured heirlooms, and every dish tells a story of heritage,
          passion, and hospitality.
        </p>
      </section>

    </div>
  )
}

export default Home
