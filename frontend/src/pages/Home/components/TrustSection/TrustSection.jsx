import "./TrustSection.css";

const trustItems = [
  {
    title: "Customer First",
    description:
      "Our customers are at the heart of everything we do.",
  },
  {
    title: "No Spam or Gimmicks",
    description:
      "No recommendations or unwanted notifications.",
  },
  {
    title: "Transparent",
    description:
      "Simple pricing and no hidden charges.",
  },
  {
    title: "Low Cost",
    description:
      "Affordable investing for everyone.",
  },
];

const TrustSection = () => {
  return (
    <section className="trust-section">
      <div className="trust-container">
        {/* Left Side */}
        <div className="trust-content">
          <h2 className="trust-heading">
            Trust with confidence
          </h2>

          <div className="trust-grid">
            {trustItems.map((trust) => (
              <div className="trust-card" key={trust.title}>
                <h3>{trust.title}</h3>
                <p>{trust.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="trust-image">
          <img
            src="https://zerodha.com/z-connect/wp-content/uploads/2019/01/No.-1-Broker-India.png"
            alt="Zerodha Ecosystem"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustSection;