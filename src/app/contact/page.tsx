 
import { ContactHero, WhyChooseUs, ContactForm } from "@/components/ContactComponents"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactHero />
      <ContactForm /> 
      <WhyChooseUs />
    </main>
  )
}
