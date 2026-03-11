"use client"

const benefits = [
  {
    title: "Smart Pricing",
    description: "We offer transparent and optimized solutions tailored to your budget without compromising quality."
  },
  {
    title: "Premium Materials",
    description: "Only carefully selected materials that ensure durability, aesthetics, and long-term value."
  },
  {
    title: "On-Time Delivery",
    description: "Efficient planning and execution to complete your project within the promised timeline."
  },
  {
    title: "Trusted Support",
    description: "Reliable post-project support to ensure everything performs perfectly after completion."
  }
]

export default function InteriorBenefits() {
  return (
    <section className="px-10 pb-20">
      <div className="max-w-[1536px] mx-auto">
        <div className="bg-[#f37021] rounded-[3rem] p-12 md:p-16 lg:p-20 shadow-2xl shadow-[#f37021]/30">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-white">
            {benefits.map((benefit, i) => (
              <div key={i} className="space-y-4 relative">
                {/* Divider for desktop */}
                {i < benefits.length - 1 && (
                  <div className="hidden lg:block absolute right-[-24px] top-4 bottom-4 w-px bg-white/20" />
                )}
                <h3 className="text-2xl font-black">{benefit.title}</h3>
                <p className="text-white/90 font-medium leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
