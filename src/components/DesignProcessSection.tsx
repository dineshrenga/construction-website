"use client"

const designProcess = [
  { image: "/Group1.png" },
  { image: "/Group2.png" },
  { image: "/Group3.png" },
  { image: "/Group4.png" },
  { image: "/Group5.png" },
  { image: "/Group6.png" },
]

export default function DesignProcessSection() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1536px] mx-auto px-4 md:px-10">
        <div className="text-center mb-10 md:mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-[#0d1117]">
            Our <span className="text-[#f37021]">Design</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-bold">
            Meticulous and professional design process for superior project execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center">
          {designProcess.map((step, i) => (
            <div
              key={i}
              className="relative aspect-[4/5] h-full md:h-[350px] w-full md:w-[300px] rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-700 mx-auto"
            > 
              <img
                src={step.image}
                alt={`Design Process Step ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
