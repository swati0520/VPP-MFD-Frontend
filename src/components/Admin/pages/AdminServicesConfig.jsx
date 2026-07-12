import AdminPageEditor from "./AdminPageEditor";

const area = (name, label) => ({ name, label, type: "textarea", fullWidth: true });
const sections = [
  { title: "1. Page Header", fields: [{ name: "pageTitle", label: "Page Title" }, { name: "heroBanner", label: "Hero Banner", type: "image" }] },
  { title: "2. Services Introduction", fields: [{ name: "eyebrow", label: "Eyebrow" }, { name: "heading", label: "Heading" }, area("description", "Description")] },
  { title: "3. Service Cards", dynamic: true, dynamicName: "services", dynamicFields: [{ name: "icon", label: "Icon" }, { name: "title", label: "Title" }, area("description", "Description")], addButtonLabel: "Add Service", itemLabel: "Service" },
  { title: "4. Process", fields: [{ name: "eyebrow", label: "Eyebrow" }, { name: "heading", label: "Heading" }, area("description", "Description")], dynamic: true, dynamicName: "steps", dynamicFields: [{ name: "step", label: "Step" }], addButtonLabel: "Add Process Step", itemLabel: "Process Step" },
  { title: "5. Call To Action", fields: [{ name: "eyebrow", label: "Eyebrow" }, { name: "heading", label: "Heading" }, area("description", "Description"), { name: "buttonLabel", label: "Button Label" }, { name: "buttonLink", label: "Button Link" }] },
];

export default function AdminServicesConfig() {
  return <AdminPageEditor title="Manage Services Page" description="Edit the header, service cards, process, and call-to-action sections shown on the Frontend Services page." sections={sections} />;
}
