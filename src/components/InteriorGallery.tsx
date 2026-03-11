"use client"

import { useState } from "react"

const categories = ["All", "Living Room", "Bedroom", "Kitchen", "Office"]

const galleryItems = [
  { title: "Modern Living Room", category: "Living Room", image: "/gallery_living_room.png" },
  { title: "Luxury Bedroom", category: "Bedroom", image: "/gallery_bedroom.png" },
  { title: "Contemporary Kitchen", category: "Kitchen", image: "/gallery_kitchen.png" },
  { title: "Elegant Office", category: "Office", image: "/gallery_office.png" },
  { title: "Cozy Family Space", category: "Living Room", image: "/gallery_living_room_2.png" },
  { title: "Minimalist Suite", category: "Bedroom", image: "/gallery_bedroom_2.png" },
  { title: "Bright White Kitchen", category: "Kitchen", image: "/gallery_kitchen_2.png" },
  { title: "Professional Studio", category: "Office", image: "/gallery_office_2.png" },
]

export default function InteriorGallery() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1536px] mx-auto px-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-[#0d1117]">
            Crafting Spaces That <span className="text-[#f37021]">Inspire</span>
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto font-bold text-lg">
            Explore a collection of interiors crafted with attention to detail, modern aesthetics and functional excellence
          </p>
        </div>

        {/* Categories / Tabs */}
        <div className="flex flex-wrap gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-2.5 rounded-xl text-sm font-black transition-all border-2 ${activeCategory === cat
                ? "bg-[#f37021] border-[#f37021] text-white shadow-lg shadow-[#f37021]/30"
                : "bg-white border-gray-200 text-gray-700 hover:border-[#f37021] hover:text-[#f37021]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {filteredItems.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-6 shadow-xl border border-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-center text-[#0d1117] text-xl font-bold tracking-tight">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
