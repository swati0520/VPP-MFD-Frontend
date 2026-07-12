import AdminPageEditor from "./AdminPageEditor";

const area = (name, label) => ({ name, label, type: "textarea", fullWidth: true });
const sections = [
  { title: "1. Page Header", fields: [{ name: "pageTitle", label: "Page Title" }, { name: "heroBanner", label: "Hero Banner", type: "image" }] },
  { title: "2. Career Introduction", fields: [{ name: "eyebrow", label: "Eyebrow" }, { name: "heading", label: "Heading" }, area("description", "Description"), { name: "image", label: "Image", type: "image" }, { name: "buttonLabel", label: "Button Label" }], dynamic: true, dynamicName: "benefits", dynamicFields: [{ name: "benefit", label: "Benefit" }], addButtonLabel: "Add Benefit", itemLabel: "Benefit" },
  { title: "3. Open Positions", fields: [{ name: "eyebrow", label: "Eyebrow" }, { name: "heading", label: "Heading" }], dynamic: true, dynamicName: "positions", dynamicFields: [{ name: "title", label: "Position Title" }, area("description", "Description")], addButtonLabel: "Add Position", itemLabel: "Position" },
  { title: "4. Application", fields: [{ name: "heading", label: "Heading" }, area("description", "Description"), { name: "email", label: "Resume Email" }, { name: "lifeHeading", label: "Life At VPP Heading" }, { name: "fullName", label: "Full Name Label" }, { name: "emailLabel", label: "Email Label" }, { name: "phone", label: "Phone Label" }, { name: "resume", label: "Resume Upload Label" }, { name: "submitLabel", label: "Submit Button Label" }], dynamic: true, dynamicName: "lifeItems", dynamicFields: [{ name: "item", label: "Life At VPP Item" }], addButtonLabel: "Add Life Item", itemLabel: "Life Item" },
  { title: "5. Frequently Asked Questions", fields: [{ name: "heading", label: "Heading" }, area("description", "Description"), { name: "supportLabel", label: "Support Button Label" }], dynamic: true, dynamicName: "faqs", dynamicFields: [{ name: "question", label: "Question" }, area("answer", "Answer")], addButtonLabel: "Add FAQ", itemLabel: "FAQ" },
];

export default function AdminCareerConfig() {
  return <AdminPageEditor title="Manage Careers Page" description="Manage every section and application field displayed on the Frontend Careers page." sections={sections} />;
}
