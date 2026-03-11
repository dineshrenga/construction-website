import HeroSection from "@/components/HeroSection";
import AboutUsSection from "@/components/AboutUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PackagesSection from "@/components/PackagesSection";
import { Home as HomeIcon, Building2, Hammer, Paintbrush } from "lucide-react";

const services = [
  {
    title: "Residential Construction",
    description: "We build strong, modern homes tailored to your lifestyle, crafted with precision and care.",
    icon: HomeIcon,
    cta: "Build Your Dream Home",
    image: "/service_residential_house_1773034900322.png",
  },
  {
    title: "Commercial Construction",
    description: "Delivering structural excellence for business spaces that empower growth and sustainability.",
    icon: Building2,
    cta: "Start Your Project",
    image: "/service_commercial_office_1773034919129.png",
  },
  {
    title: "Renovation & Remodeling",
    description: "Transforming your existing spaces into modern masterpieces with seamless integration.",
    icon: Hammer,
    cta: "Plan Your Renovation",
    image: "/service_renovation_site_1773034264448.png",
  },
  {
    title: "Interior & Finishing",
    description: "Exquisite interior details and finishes that reflect elegance in every corner of your home.",
    icon: Paintbrush,
    cta: "Design Your Space",
    image: "/service_interior_design_1773034935222.png",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutUsSection />

      <section id="services" className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0d1117]">
              Our Core Construction <span className="text-[#f37021]">Services</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
              Delivering end-to-end construction solutions with quality, precision and modern design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="relative aspect-[16/10] rounded-[2rem] overflow-hidden group cursor-pointer shadow-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-10 flex flex-col justify-end items-center text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-xl">
                    <service.icon className="w-6 h-6 text-[#f37021]" />
                  </div>
                  <h3 className="text-[#f37021] text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/80 text-sm max-w-sm mb-8 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 text-gray-200">
                    {service.description}
                  </p>
                  <button className="px-8 py-2.5 rounded-lg border border-[#f37021] text-white text-sm font-bold hover:bg-[#f37021] transition-all">
                    {service.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <PackagesSection />
    </div>
  );
}
