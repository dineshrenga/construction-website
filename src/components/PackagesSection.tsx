export default function PackagesSection() {
  const packages = [
    {
      title: "Basic",
      subtitle: "Simple Start",
      image: "/service_residential_house_1773034900322.png",
    },
    {
      title: "Standard",
      subtitle: "Popular Choice",
      image: "/standard_modern_house.png",
    },
    {
      title: "Premium",
      subtitle: "Smart Living",
      image: "/hero_luxury_home_1773034232851.png",
    },
    {
      title: "Ultra Luxury",
      subtitle: "Ultimate Experience",
      image: "/package_luxury_villa_exterior_1773034952119.png",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0d1117]">
            Our Home Construction <span className="text-[#f37021]">Packages</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">
            Tailored building plans to suit every lifestyle and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {packages.map((pkg, i) => (
            <div key={i} className="relative aspect-[4/5] rounded-[2rem] overflow-hidden group cursor-pointer shadow-lg">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end items-center text-center">
                <h3 className="text-[#f37021] text-2xl font-bold mb-1 tracking-tight">{pkg.title}</h3>
                <p className="text-white text-sm font-medium opacity-90">{pkg.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-10 py-3 rounded-lg border border-[#f37021] text-[#f37021] font-bold hover:bg-[#f37021] hover:text-white transition-all">
            View All Packages
          </button>
        </div>
      </div>
    </section>
  )
}
