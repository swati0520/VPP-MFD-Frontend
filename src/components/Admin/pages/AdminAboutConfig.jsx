import AdminPageEditor from "./AdminPageEditor";

const text = (name, label, fullWidth = false) => ({ name, label, fullWidth });
const area = (name, label) => ({ name, label, type: "textarea", fullWidth: true });

const sections = [
  { title: "1. Page Header", fields: [text("pageTitle", "Page Title"), { name: "heroBanner", label: "Hero Banner", type: "image" }] },
  { title: "2. Introduction", fields: [text("heading", "Heading"), area("description", "Description"), { name: "image", label: "Image", type: "image" }, text("buttonLabel", "Button Label")], dynamic: true, dynamicName: "features", dynamicFields: [text("feature", "Feature")], addButtonLabel: "Add Feature", itemLabel: "Feature" },
  { title: "3. Process", dynamic: true, dynamicName: "process", dynamicFields: [text("id", "Step Number"), text("title", "Title"), area("description", "Description")], addButtonLabel: "Add Process Step", itemLabel: "Process Step" },
  { title: "4. Frequently Asked Questions", fields: [text("heading", "Heading"), area("description", "Description"), text("supportLabel", "Support Link Label")], dynamic: true, dynamicName: "faqs", dynamicFields: [text("question", "Question"), area("answer", "Answer")], addButtonLabel: "Add FAQ", itemLabel: "FAQ" },
  { title: "5. Call To Action", fields: [area("text", "Text"), text("buttonLabel", "Button Label")] },
];

export default function AdminAboutConfig() {
  return <AdminPageEditor title="Manage About Page" description="Edit the same header, introduction, process, FAQ, and call-to-action content shown on the Frontend About page." sections={sections} />;
}
