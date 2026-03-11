"use client"

const processes = [
  { image: "/Frame1.png" },
  { image: "/Frame2.png" },
  { image: "/Frame3.png" },
  { image: "/Frame4.png" },
]

export default function InteriorProcess() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1536px] mx-auto px-10">
        <div className="text-center mb-10 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-[#0d1117]">
            Where purpose meets <span className="text-[#f37021]">personality in design.</span>
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto font-bold text-lg">
            Blending creativity and practicality to shape meaningful living environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {processes.map((proc, i) => (
            <div
              key={i}
              className="relative aspect-square flex flex-col items-center justify-center bg-white rounded-[3rem]"
            >
              <div className="relative w-60 h-60 mb-8 flex items-center justify-center">
                <img
                  src={proc.image}
                  alt={proc.image}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
