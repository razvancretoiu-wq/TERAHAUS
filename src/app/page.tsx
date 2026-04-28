import HeroSlider from "@/components/home/HeroSlider"
import BenefitsBar from "@/components/home/BenefitsBar"
import ProductCategoryCarousels from "@/components/ProductCategoryCarousels"
import ProductTabs from "@/components/home/ProductTabs"


export default function Home() {
  return (
    <>
      <HeroSlider />
      <BenefitsBar />
      <PromoGrid />
      <ProductTabs />
    </>
  )
}
