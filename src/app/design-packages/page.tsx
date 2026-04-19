import DesignPackagesHero from "@/components/DesignPackagesHero"
import DesignProcessSection from "@/components/DesignProcessSection"
import ArchitecturalPackages from "@/components/ArchitecturalPackages"

export default function DesignPackagesPage() {
  return (
    <main className="flex flex-col">
      <DesignPackagesHero />
      <DesignProcessSection /> 
      <ArchitecturalPackages />
    </main>
  )
}
