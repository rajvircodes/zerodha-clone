import "./SignupHero.css";

function SignupHero() {
  return (
    <section className="signup-hero">
      <div className="signup-hero-container">

        <div className="signup-content">
          <h1>Open a free demat and trading account online</h1>

          <p>
            Start investing brokerage free and join
            millions of investors and traders.
          </p>


          <a className="signup-btn"
  href="https://zerodha-clone-b8ir.vercel.app/register"
>
  Signup now
</a>
        </div>

        <div className="signup-image">
          <img
            src="https://zerodha.com/static/images/account_open.svg"
            alt="Signup Illustration"
          />
        </div>

      </div>
    </section>
  );
}

export default SignupHero;