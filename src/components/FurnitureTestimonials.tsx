"use client"

const items = [
  {
    title: "Modern Armchair",
    description: "Crafted for comfort",
    price: "5000",
    label: "Top Seller",
    image: "/furniture_sofa.png"
  },
  {
    title: "Elegant Coffee Table",
    description: "Modern Living Essential",
    price: "7000",
    label: "Top Seller",
    image: "/gallery_living_room_2.png"
  },
  {
    title: "Stylish Accent Chair",
    description: "Smart & Stylish",
    price: "4000",
    label: "Modern Living Essential",
    image: "/gallery_office_2.png"
  }
]

export default function FurnitureTestimonials() {
  return (
    <section className="pb-0">
      <div className="max-w-[1536px] mx-auto">
        <div className="rounded-[3rem] p-12 lg:p-16">
          <div className="text-center mb-16 space-y-4">
            {/* Dashed Sub-header Box */}
            <div className="inline-block px-10 py-4 rounded-xl mb-6">
              <h2 className="text-4xl font-black text-[#0d1117]">What our <span className="text-[#f37021]">Clients Say</span></h2>
            </div>
            <p className="text-gray-600 font-bold text-lg max-w-2xl mx-auto italic">
              "Perfect finishing touch to our home. The furniture matched our space beautifully."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((item, i) => (
              <div key={i} className="bg-white rounded-[2.5rem] p-8 flex flex-col items-center text-center shadow-lg border border-gray-100 group hover:-translate-y-2 transition-all duration-500">
                <div className="bg-[#fff8f1] px-6 py-2 rounded-full border border-[#f37021]/10 mb-8 self-start">
                  <span className="text-[#f37021] text-xs font-black uppercase tracking-widest">{item.label}</span>
                </div>

                <div className="aspect-square w-full relative mb-8 overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="text-left w-full space-y-2">
                  <h3 className="text-[#f37021] text-xl font-black">{item.title}</h3>
                  <p className="text-gray-500 font-bold text-sm">{item.description}</p>
                  <p className="text-[#f37021] font-black">
                    From: <span className="text-xl ml-2 text-[#0d1117]">₹ {item.price}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
