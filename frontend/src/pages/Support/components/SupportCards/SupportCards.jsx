import "./SupportCards.css";

const supportTopics = [
  "Account Opening",
  "Funds & Withdrawals",
  "Orders & Trades",
  "Profile Settings",
  "Charges & Pricing",
  "Security",
];

function SupportCards() {
  return (
    <section className="support-cards">
      <div className="support-grid">

        {supportTopics.map((topic) => (
          <div
            className="support-card"
            key={topic}
          >
            <h3>{topic}</h3>
          </div>
        ))}

      </div>
    </section>
  );
}

export default SupportCards;