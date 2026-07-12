import SectionForm from "./SectionForm";

export default function AdminPageEditor({ title, description, sections }) {
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <header className="rounded-2xl border border-[#BFDBFE] bg-white p-6 shadow-sm dark:border-[#3B2F5C] dark:bg-[#1B1B2B]">
        <h1 className="text-2xl font-bold text-[#4A044E] dark:text-white md:text-3xl">{title}</h1>
        <p className="mt-2 text-sm leading-6 text-[#6B7280] dark:text-[#D1D5DB]">{description}</p>
      </header>
      {sections.map((section) => (
        <SectionForm key={section.title} {...section} />
      ))}
    </div>
  );
}
