import { Building2, Compass, ShieldCheck } from "lucide-react";
import Card from "../components/Card";

const features = [
  {
    title: "Market Context",
    description: "Understand movement, opportunity, and risk through a practical advisory lens.",
    Icon: Building2,
  },
  {
    title: "Planning Support",
    description: "Connect market decisions with client goals, time horizons, and risk appetite.",
    Icon: Compass,
  },
  {
    title: "Structured Review",
    description: "Keep decisions disciplined with clear checkpoints and transparent conversations.",
    Icon: ShieldCheck,
  },
];

export default function TradeHub() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <section className="px-4 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {features.map(({ title, description, Icon }) => (
            <Card key={title} className="p-6">
              <Icon className="mb-5 h-8 w-8 text-teal-300" />
              <h2 className="text-xl font-bold text-white">{title}</h2>
              <p className="mt-3 leading-7 text-slate-300">{description}</p>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
