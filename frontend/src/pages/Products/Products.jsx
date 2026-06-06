import "./Products.css";

import ProductsHero from "./components/ProductsHero/ProductsHero";
import ProductCard from "./components/ProductCard/ProductCard";

const products = [
  {
    title: "Kite",
    description:
      "Our ultra-fast flagship trading platform.",
  },
  {
    title: "Console",
    description:
      "Portfolio and reporting platform.",
  },
  {
    title: "Coin",
    description:
      "Direct mutual fund investments.",
  },
  {
    title: "Varsity",
    description:
      "Learn stock market investing for free.",
  },
];

function Products() {
  return (
    <>
      <ProductsHero />

      <section className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.title}
            title={product.title}
            description={product.description}
          />
        ))}
      </section>
    </>
  );
}

export default Products;