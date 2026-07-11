import { CalendarDays } from "lucide-react";
import Card from "../components/Card";

const posts = [
  {
    title: "Building disciplined investment habits",
    description: "Simple practices that help investors stay consistent through changing market cycles.",
    date: "Planning",
  },
  {
    title: "Why portfolio reviews matter",
    description: "Regular reviews keep financial plans aligned with goals, risk profile, and life changes.",
    date: "Advisory",
  },
  {
    title: "Reading market signals with context",
    description: "Useful market information becomes stronger when paired with clear objectives.",
    date: "Markets",
  },
];

export default function Blogs() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <section className="px-4 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.title} className="p-6">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-teal-500/15 px-3 py-1 text-sm font-semibold text-teal-300">
                <CalendarDays className="h-4 w-4" /> {post.date}
              </div>
              <h2 className="text-xl font-bold text-white">{post.title}</h2>
              <p className="mt-4 leading-7 text-slate-300">{post.description}</p>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
