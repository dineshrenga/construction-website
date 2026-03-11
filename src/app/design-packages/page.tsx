import DesignPackagesHero from "@/components/DesignPackagesHero"
import DesignProcessSection from "@/components/DesignProcessSection"
import ArchitecturalPackages from "@/components/ArchitecturalPackages"
import Footer from "@/components/Footer"

export default function DesignPackagesPage() {
  return (
    <main className="flex flex-col">
      <DesignPackagesHero />
      <DesignProcessSection />
      <ArchitecturalPackages />
    </main>
  )
}
