import React from "react";
import "./App.css";

const Main = () => {
  return (
    <main className="main">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Little Lemon</h1>
        <p>Experience the best Mediterranean cuisine in town.</p>
        <button>Reserve a Table</button>
      </section>

      {/* Specials Section */}
      <section className="specials">
        <h2>Specials</h2>
        <div className="specials-grid">
          <article className="special-item">
            <img src="/greek-salad.jpg" alt="Greek Salad" />
            <h3>Greek Salad</h3>
            <p>Fresh veggies with feta cheese.</p>
          </article>
          <article className="special-item">
            <img src="/bruschetta.jpg" alt="Bruschetta" />
            <h3>Bruschetta</h3>
            <p>Grilled bread with tomato & basil.</p>
          </article>
          <article className="special-item">
            <img src="/dessert.jpg" alt="Lemon Dessert" />
            <h3>Lemon Dessert</h3>
            <p>Sweet & tangy lemon pastry.</p>
          </article>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <p>"Amazing food and great service!"</p>
            <p>- Sarah</p>
          </div>
          <div className="testimonial">
            <p>"Best Mediterranean dishes ever!"</p>
            <p>- Ahmed</p>
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
