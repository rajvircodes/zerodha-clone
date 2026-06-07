import "./PricingCard.css";

function PricingCard({ title, price }) {
  return (
    <div className="pricing-card">
      <h2>{price}</h2>

      <h3>{title}</h3>
    </div>
  );
}

export default PricingCard;