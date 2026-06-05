import './PricingSection.css'

const pricingCards = [
    {
        price: "₹0",
        title: "Free equity delivery"
    },
    {
        price: "₹120",
        title: "Intraday and F&O trades"
    }
];

const PricingSection = () => {
    return (
        <section className='pricing-section'>
            <div className="pricing-container">
                <div className="pricing-content">
                    <h2>Unbeatable pricing</h2>

                    <p>
                        we pioneered concept of discount broking
                        and price transparency in India.
                    </p>


                    <a href="#">See pricing →</a>
                </div>

             <div className="pricing-cards">
                   {
                    pricingCards.map((card) => (
                        <div className='pricing-card' key={card.title}>
                            <h3>{card.price}</h3>
                            <p>{card.title}</p>
                        </div>
                    ))
                }
             </div>
            </div>
        </section>
    )
}

export default PricingSection