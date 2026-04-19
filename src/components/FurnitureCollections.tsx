"use client"

const collections = [
  {
    title: "Living Room Furniture",
    description: "Soft, durable, and designed for everyday comfort.",
    image: "/gallery_living_room.png",
    color: "#f37021"
  },
  {
    title: "Bedroom Furniture",
    description: "Soft, durable, and designed for everyday comfort.",
    image: "/gallery_bedroom.png",
    color: "#f37021"
  },
  {
    title: "Dining sets",
    description: "Soft, durable, and designed for everyday comfort.",
    image: "/gallery_kitchen.png",
    color: "#f37021"
  },
  {
    title: "Office Furniture",
    description: "Soft, durable, and designed for everyday comfort.",
    image: "/gallery_office.png",
    color: "#f37021"
  }
]

export default function FurnitureCollections() {
  return (
    <section className="py-4 md:py-10 bg-white">
      <div className="max-w-[1536px] mx-auto px-4 md:px-10">
        <div className="text-center mb-4 md:mb-16 space-y-4">
          <h2 className="text-2xl md:text-5xl font-black text-[#0d1117]">
            Our <span className="text-[#f37021]">Furniture Collections</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-bold text-lg">
            Designed for durability, comfort and modern aesthetics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((item, i) => (
            <div
              key={i}
              className="bg-white md:rounded-[2.5rem] rounded-2xl overflow-hidden border border-gray-100 shadow-xl group hover:-translate-y-2 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 space-y-3">
                <h3 className="text-xl font-black text-[#f37021]">{item.title}</h3>
                <p className="text-gray-600 font-bold text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
