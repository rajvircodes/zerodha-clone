import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <img
        src="https://zerodha.com/static/images/landing.png"
        alt="Zerodha Hero"
      />

      <h1>Invest in everything</h1>

      <p>
        Online platform to invest in stocks, derivatives,
        mutual funds, ETFs, bonds, and more.
      </p>

      <button>Sign up for free</button>
    </section>
  );
}

export default Hero;