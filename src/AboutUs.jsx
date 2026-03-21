import React from 'react'
import './AboutUs.css'

function AboutUs() {
  return (
    <div className="about-page">

      <h1 className="about-title">About Italian Flavors</h1>

      {/* SECTION 1 */}
      <div className="about-section">
        <div className="about-img">
          <img src="/diary-12.jpg" alt="" />
        </div>
        <div className="about-text">
          <h2>Authentic Roots</h2>
          <p>
            Italian Flavors is inspired by the timeless traditions of Italian cuisine, where simplicity and quality ingredients create unforgettable dishes.
          </p>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="about-section reverse">
        <div className="about-img">
          <img src="/bev-15.jpg" alt="" />
        </div>
        <div className="about-text">
          <h2>Rich Variety</h2>
          <p>
            From vegetarian delights to rich non-vegetarian meals, every category is crafted to deliver a complete and satisfying culinary experience.
          </p>
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="about-section">
        <div className="about-img">
          <img src="/dessert-10.jpg" alt="" />
        </div>
        <div className="about-text">
          <h2>Sweet Indulgence</h2>
          <p>
            Our desserts are designed to bring joy in every bite, combining elegance with irresistible flavors that complete your meal perfectly.
          </p>
        </div>
      </div>

      {/* SECTION 4 */}
      <div className="about-section reverse">
        <div className="about-img">
          <img src="/bev-11.jpg" alt="" />
        </div>
        <div className="about-text">
          <h2>Perfect Pairings</h2>
          <p>
            Carefully curated beverages enhance every dish, ensuring a balanced and refined dining experience from start to finish.
          </p>
        </div>
      </div>

    </div>
  )
}

export default AboutUs