import React from "react";
import "./App.css";

const Main = () => {
  return (
    <main className="main">
      <section className="hero">
        <div>
        <h1>Little Lemon</h1>
        <h2 class="subheading">Chicago</h2>
        <p>Experience the finest Mediterranean flavors, crafted with tradition and passion. Since 1968, we've been serving authentic dishes made from the freshest ingredients, bringing the warmth of the Mediterranean to your table.</p>
        <button>Reserve a Table</button>
        </div>
        <div>
        <img src="/restaurant-chef.jpg" alt="restaurant-chef" className="hero-image" />
        </div>
      </section>

      <section className="specials">
        <div className="heading-button">
        <h2>Specials</h2>
        <button>Online Menu</button>
        </div>
        <div className="specials-grid">
          <article className="special-item">
            <img src="/greek salad.jpg" alt="Greek Salad" />
            <div className="special-text">
            <div className="special-name-price">
            <h3>Greek Salad</h3>
            <p className="price">$12.99</p>
            </div>
            <p>A refreshing mix of crisp lettuce, juicy tomatoes, crunchy cucumbers, and red onions, all topped with creamy feta cheese and Kalamata olives. Drizzled with a zesty olive oil dressing for a Mediterranean delight.</p>
            </div>
          </article>
          <article className="special-item">
            <img src="/bruchetta.jpg" alt="Bruschetta" />
            <div className="special-text">
            <div className="special-name-price">
            <h3>Bruschetta</h3>
            <p className="price">$5.99</p>
            </div>
            <p>Slices of rustic, grilled bread topped with a vibrant mixture of diced tomatoes, fresh basil, and garlic, infused with extra virgin olive oil and a hint of balsamic glaze for the perfect balance of flavors.</p>
            </div>
          </article>
          <article className="special-item">
            <img src="/lemon dessert.jpg" alt="Lemon Dessert" />
            <div className="special-text">
            <div className="special-name-price">
            <h3>Lemon Dessert</h3>
            <p className="price">$5.99</p>
            </div>
            <p>A luscious lemon-infused pastry with a delicate, buttery crust and a smooth, tangy-sweet filling, finished with a dusting of powdered sugar for a delightful citrus treat.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <img src="/sarah.png" alt="sarah-guest"/>
            <p>"Absolutely delicious! The freshest ingredients and bold flavors make every bite amazing!"</p>
            <p>- Sarah</p>
          </div>
          <div className="testimonial">
            <img src="/ahmed.png" alt="ahmed-guest"/>
            <p>"Incredible atmosphere and friendly staff! The lemon pastries are a must-try."</p>
            <p>- Ahmed</p>
          </div>
          <div className="testimonial">
            <img src="/emma.png" alt="emma-guest"/>
            <p>"Best Mediterranean food in town! Everything tastes homemade and full of love.s"</p>
            <p>- Emma</p>
          </div>
          <div className="testimonial">
            <img src="/ben.png" alt="ben-guest"/>
            <p>"Fast service, great portions, and the grilled bread with tomato & basil is perfection!"</p>
            <p>- Ben</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Us</h2>
        <p>Meet Adrian and Mario, our expert chefs bringing authentic flavors to your table.</p>
        <img src="/chefs.jpg" alt="Adrian and Mario" />
      </section>
    </main>
  );
};

export default Main;
