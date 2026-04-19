"use client"

const products = [
  {
    title: "Sofa Collection",
    description: "Soft, durable, and designed for comfort.",
    price: "8,000",
    label: "Top Seller",
    image: "/sofa_modern.png"
  },
  {
    title: "Dining Tables",
    description: "Perfect blend of functionality and style.",
    price: "10,000",
    label: "Modern Living Essential",
    image: "/dining_table_modern.png"
  },
  {
    title: "Luxury Beds",
    description: "Crafted for comfort and premium quality.",
    price: "15,000",
    label: "Start Saving",
    image: "/bed_luxury.png"
  }
]

export default function HandpickedDesigns() {
  return (
    <section className="py-4 md:py-10 bg-white">
      <div className="max-w-[1536px] mx-auto px-4 md:px-10">
        <div className="text-center mb-4 md:mb-16 space-y-4">
          <h2 className="text-2xl md:text-5xl font-black text-[#0d1117]">
            Handpicked Designs for <span className="text-[#f37021]">Modern Living</span>
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto font-bold text-lg">
            We don't just build spaces — we complete them with furniture that matches your layout, style, and purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((prod, i) => (
            <div key={i} className="bg-[#fff8f1] md:rounded-[2rem] rounded-2xl md:p-6 p-4 flex flex-col items-center text-center shadow-sm border border-[#f37021]/5 group hover:shadow-xl transition-all duration-500">
              {/* Badge */}
              <div className="bg-white px-4 py-1.5 rounded-full border border-[#f37021]/10 mb-6 self-start">
                <span className="text-[#f37021] text-[10px] font-black uppercase tracking-widest">{prod.label}</span>
              </div>

              <div className="aspect-square w-4/5 relative mb-6">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="space-y-3 w-full text-left bg-white p-5 rounded-[1.5rem] border border-[#f37021]/5">
                <h3 className="text-[#f37021] text-lg font-black">{prod.title}</h3>
                <p className="text-gray-600 font-bold text-xs">{prod.description}</p>
                <p className="text-[#f37021] font-black text-base">
                  From: <span className="text-xl ml-2 text-[#0d1117]">₹ {prod.price}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
