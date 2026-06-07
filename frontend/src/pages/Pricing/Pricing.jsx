import "./Pricing.css";

import PricingHero from "./components/PricingHero/PricingHero";
import PricingCard from "./components/PricingCard/PricingCard";

const pricingPlans = [
  {
    title: "Equity Delivery",
    price: "₹0",
  },
  {
    title: "Intraday & F&O",
    price: "₹20",
  },
  {
    title: "Direct Mutual Funds",
    price: "₹0",
  },
];

function Pricing() {
  return (
    <>
      <PricingHero />

      <section className="pricing-grid">
        {pricingPlans.map((plan) => (
          <PricingCard
            key={plan.title}
            title={plan.title}
            price={plan.price}
          />
        ))}
      </section>
    </>
  );
}

export default Pricing;