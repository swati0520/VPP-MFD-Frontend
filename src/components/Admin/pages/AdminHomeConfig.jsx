import AdminPageEditor from "./AdminPageEditor";

const area = (name, label) => ({ name, label, type: "textarea", fullWidth: true });
const sections = [
  {
    title: "1. Hero Section",
    fields: [
      { name: "tagline", label: "Tagline" },
      { name: "heading", label: "Heading" },
      { name: "highlightedHeading", label: "Highlighted Heading" },
      area("description", "Description"),
      { name: "primaryButtonLabel", label: "Primary Button Label" },
      { name: "primaryButtonLink", label: "Primary Button Link" },
      { name: "secondaryButtonLabel", label: "Secondary Button Label" },
      { name: "secondaryButtonLink", label: "Secondary Button Link" },
      { name: "chartLabel", label: "Chart Label" },
      { name: "growthValue", label: "Growth Value" },
    ],
    dynamic: true,
    dynamicName: "chartBars",
    dynamicFields: [{ name: "height", label: "Chart Bar Height", type: "number", min: 0, max: 100 }],
    addButtonLabel: "Add Chart Bar",
    itemLabel: "Chart Bar",
  },
  {
    title: "2. Services Section",
    fields: [
      { name: "eyebrow", label: "Eyebrow" },
      { name: "heading", label: "Heading" },
      area("description", "Description"),
      { name: "viewAllLabel", label: "View All Button Label" },
      { name: "viewAllLink", label: "View All Button Link" },
    ],
    dynamic: true,
    dynamicName: "services",
    dynamicFields: [
      { name: "icon", label: "Icon" },
      { name: "title", label: "Title" },
      area("description", "Description"),
      { name: "buttonLabel", label: "Button Label" },
      { name: "buttonLink", label: "Button Link" },
    ],
    addButtonLabel: "Add Service",
    itemLabel: "Service",
  },
];

export default function AdminHomeConfig() {
  return <AdminPageEditor title="Manage Home Page" description="Manage the hero and services sections currently rendered by the Frontend Home page." sections={sections} />;
}
