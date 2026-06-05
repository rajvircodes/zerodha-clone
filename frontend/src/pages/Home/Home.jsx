import Ecosystem from "./components/Ecosystem/Ecosystem"
import Hero from "./components/Hero/Hero"
import PricingSection from "./components/PricingSection/PricingSection"
import TrustSection from "./components/TrustSection/TrustSection"

const Home = () => {
  return (
    <>
      <Hero/>
      <TrustSection/>
      <Ecosystem/>
      <PricingSection/>
    </>
  )
}

export default Home