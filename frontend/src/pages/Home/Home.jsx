import Ecosystem from "./components/Ecosystem/Ecosystem"
import Hero from "./components/Hero/Hero"
import OpenAccount from "./components/OpenAccount/OpenAccount"
import PricingSection from "./components/PricingSection/PricingSection"
import TrustSection from "./components/TrustSection/TrustSection"

const Home = () => {
  return (
    <>
      <Hero />
      <TrustSection />
      <Ecosystem />
      <PricingSection />
      <OpenAccount />
    </>
  )
}

export default Home