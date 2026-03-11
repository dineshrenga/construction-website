import FurnitureHero from "@/components/FurnitureHero"
import FurnitureCollections from "@/components/FurnitureCollections"
import HandpickedDesigns from "@/components/HandpickedDesigns"
import FurnitureTestimonials from "@/components/FurnitureTestimonials"
import FurnitureComplement from "@/components/FurnitureComplement"
 
export default function FurniturePage() {
  return (
    <main className="flex flex-col">
      <FurnitureHero />
      <FurnitureCollections />
      <HandpickedDesigns />
      <FurnitureTestimonials />
      <FurnitureComplement />
     </main>
  )
}
