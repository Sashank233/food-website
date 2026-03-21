import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className="home">

      <header className="hero">

        <video
          className="bg-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/food.mp4" type="video/mp4" />
        </video>

        <div className="overlay"></div>

        <div className="hero-content">
          <h1>Welcome to Italian Flavors</h1>
          <p>
            Experience the soul of Italy through timeless recipes,
            fresh ingredients, and culinary traditions passed down for generations.
          </p>
        </div>

      </header>
      <section className="italian-intro">
  <p>
    Italian cuisine is a celebration of simplicity, where fresh ingredients and time-honored techniques come together to create unforgettable flavors. 
    From rustic countryside dishes to refined classics, every meal tells a story of tradition, passion, and authenticity.
  </p>
</section>

      {/* IMAGE GRID SECTION */}
     <section className="image-train">
  <div className="train-track">

    <img src="/veg-1.jpg" alt="" />
    <img src="/veg-2.jpg" alt="" />
   <img src="/bev-9.jpg" alt="" />

    <img src="/nonveg-7.jpg" alt="" />
    <img src="/NonVeg-2.jpg" alt="" />
    <img src="/NonVeg-3.jpg" alt="" />

    <img src="/diary-11.jpg" alt="" />
    <img src="/diary-12.jpg" alt="" />
    <img src="/diary-13.jpg" alt="" />

    {/* duplicate for smooth loop */}
    <img src="/desert-11.jpg" alt="" />
    <img src="/desert-10.jpg" alt="" />
    <img src="/desert-9.jpg" alt="" />

    <img src="/bev-10.jpg" alt="" />
    <img src="/bev-12.jpg" alt="" />
    <img src="/bev-13.jpg" alt="" />

  </div>
</section>
{/* FOOTER */}
<footer className="food-footer">
  <p>
    Food is more than nourishment — it is a language of love, a bridge between cultures, and a memory we carry with every bite.  
    In every aroma and flavor lies a story waiting to be discovered, shared, and cherished.  
    From simple ingredients to extraordinary experiences, food brings people together in the most beautiful way.  
    Taste slowly, savor deeply, and let every meal become a moment worth remembering.
  </p>
</footer>
    </div>
  )
}

export default Home