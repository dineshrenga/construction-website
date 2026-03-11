"use client"

const products = [
  {
    title: "Sofa Collection",
    description: "Soft, durable, and designed for comfort.",
    price: "8000",
    label: "Top Seller",
    image: "/furniture_sofa.png"
  },
  {
    title: "Dining Tables",
    description: "Perfect blend of functionality and style.",
    price: "10000",
    label: "Modern Living Essential",
    image: "/Frame2.png" // Placeholderish but fits the vibe
  },
  {
    title: "Luxury Beds",
    description: "Crafted for comfort and premium quality.",
    price: "15000",
    label: "Start Saving",
    image: "/gallery_bedroom_2.png"
  }
]

export default function HandpickedDesigns() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1536px] mx-auto px-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-black text-[#0d1117]">
            Handpicked Designs for <span className="text-[#f37021]">Modern Living</span>
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto font-bold text-lg">
            We don't just build spaces — we complete them with furniture that matches your layout, style, and purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((prod, i) => (
            <div key={i} className="bg-[#fff8f1] rounded-[2.5rem] p-8 flex flex-col items-center text-center shadow-sm border border-[#f37021]/5 group hover:shadow-xl transition-all duration-500">
              {/* Badge */}
              <div className="bg-white px-6 py-2 rounded-full border border-[#f37021]/10 mb-8 self-start">
                <span className="text-[#f37021] text-xs font-black uppercase tracking-widest">{prod.label}</span>
              </div>

              <div className="aspect-square w-full relative mb-8">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="space-y-4 w-full text-left bg-white p-6 rounded-[2rem] border border-[#f37021]/5">
                <h3 className="text-[#f37021] text-xl font-black">{prod.title}</h3>
                <p className="text-gray-600 font-bold text-sm">{prod.description}</p>
                <p className="text-[#f37021] font-black text-lg">
                  From: <span className="text-2xl ml-2">₹ {prod.price}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
