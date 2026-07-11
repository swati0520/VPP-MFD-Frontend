import { CheckCircle2, Compass, Goal, Route } from "lucide-react";
import Button from "../components/Button";
import Card from "../components/Card";

const steps = [
  {
    title: "Define Goals",
    description: "Turn broad ambitions into practical financial priorities.",
    Icon: Goal,
  },
  {
    title: "Choose Direction",
    description: "Map decisions to risk profile, timeline, and current needs.",
    Icon: Compass,
  },
  {
    title: "Review Progress",
    description: "Use structured reviews to keep the plan relevant over time.",
    Icon: Route,
  },
];

export default function Disha() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <section className="px-4 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {steps.map(({ title, description, Icon }) => (
            <Card key={title} className="p-6">
              <Icon className="mb-5 h-8 w-8 text-teal-300" />
              <h2 className="text-xl font-bold text-white">{title}</h2>
              <p className="mt-3 leading-7 text-slate-300">{description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-soft">
          <CheckCircle2 className="mb-5 h-8 w-8 text-teal-300" />
          <h2 className="text-3xl font-extrabold text-white">Plan with a clearer next step.</h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            VPP Disha keeps the conversation focused on what matters now and what needs attention next.
          </p>
          <Button to="/contact" className="mt-8">Get in Touch</Button>
        </div>
      </section>
    </main>
  );
}
