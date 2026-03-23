import React, { useEffect } from 'react'
import './AboutUs.css'

function AboutUs() {

  useEffect(() => {
    const sections = document.querySelectorAll('.about-section')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
        })
      },
      { threshold: 0.2 }
    )

    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="about-page">

      <h1 className="about-title">About Italian Flavors</h1>

      <div className="about-section">
        <div className="about-img">
          <img src="/diary-12.jpg" alt="" />
        </div>
        <div className="about-text">
          <h2>Authentic Roots</h2>
          <p>
            <p>
  Italian Flavors is deeply inspired by the rich culinary heritage of Italy, where every recipe tells a story of tradition and passion. 
  We believe in preserving authenticity by using time-honored techniques and the finest ingredients. 
  From handcrafted pastas to classic sauces, each dish reflects a commitment to quality. 
  Our goal is to bring the true essence of Italy to your plate, one bite at a time.
</p>
          </p>
        </div>
      </div>

      <div className="about-section reverse">
        <div className="about-img">
          <img src="/bev-15.jpg" alt="" />
        </div>
        <div className="about-text">
          <h2>Rich Variety</h2>
          <p>
  Our menu celebrates diversity, offering a wide range of dishes that cater to every palate. 
  Whether you prefer wholesome vegetarian meals or indulgent non-vegetarian specialties, we have something for everyone. 
  Each category is thoughtfully curated to ensure balance, flavor, and satisfaction. 
  We strive to create a dining experience that feels both comforting and exciting.
</p>
          
        </div>
      </div>

      <div className="about-section">
        <div className="about-img">
          <img src="/dessert-10.jpg" alt="" />
        </div>
        <div className="about-text">
          <h2>Sweet Indulgence</h2>
          <p>
  Our menu celebrates diversity, offering a wide range of dishes that cater to every palate. 
  Whether you prefer wholesome vegetarian meals or indulgent non-vegetarian specialties, we have something for everyone. 
  Each category is thoughtfully curated to ensure balance, flavor, and satisfaction. 
  We strive to create a dining experience that feels both comforting and exciting.
</p>
        </div>
      </div>

      <div className="about-section reverse">
        <div className="about-img">
          <img src="/bev-11.jpg" alt="" />
        </div>
        <div className="about-text">
          <h2>Perfect Pairings</h2>
          <p>
  Desserts at Italian Flavors are crafted to be the perfect finale to your meal. 
  We combine traditional recipes with modern creativity to deliver treats that delight every sense. 
  From rich, creamy textures to light and refreshing flavors, there’s something to satisfy every sweet craving. 
  Each dessert is made with precision and passion, ensuring a memorable experience.
</p>
        </div>
      </div>

    </div>
  )
}

export default AboutUs