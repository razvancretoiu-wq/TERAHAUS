import HeroSlider from "@/components/home/HeroSlider"
import BenefitsBar from "@/components/home/BenefitsBar"
import ProductCategoryCarousels from "@/components/ProductCategoryCarousels"
import SocialMedia from "@/components/home/SocialMedia"

export default function Home() {
  return (
    <>
      <HeroSlider />
      <BenefitsBar />
      <ProductCategoryCarousels />
      <SocialMedia />
    </>
  )
}