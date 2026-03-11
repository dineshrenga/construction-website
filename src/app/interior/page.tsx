import InteriorHero from "@/components/InteriorHero"
import InteriorProcess from "@/components/InteriorProcess"
import InteriorGallery from "@/components/InteriorGallery"
import InteriorBenefits from "@/components/InteriorBenefits"
import InteriorRecentWork from "@/components/InteriorRecentWork"
 
export default function InteriorPage() {
  return (
    <main className="flex flex-col">
      <InteriorHero />
      <InteriorProcess />
      <InteriorGallery />
      <InteriorBenefits />
      <InteriorRecentWork />
     </main>
  )
}
