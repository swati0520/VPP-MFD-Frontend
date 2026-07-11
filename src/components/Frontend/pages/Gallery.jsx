
const galleryItems = [
  {
    title: "Advisory Sessions",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Client Meetings",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Team Discussions",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Planning Workshops",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Gallery() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <section className="px-4 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {galleryItems.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-soft">
              <img src={item.image} alt={item.title} className="h-72 w-full object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-bold text-white">{item.title}</h2>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
