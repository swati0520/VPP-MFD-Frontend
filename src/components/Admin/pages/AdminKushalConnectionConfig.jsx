import AdminPageEditor from "./AdminPageEditor";

const area = (name, label) => ({ name, label, type: "textarea", fullWidth: true });
const sections = [
  { title: "1. Page Header", fields: [{ name: "pageTitle", label: "Page Title" }, { name: "heroBanner", label: "Hero Banner", type: "image" }] },
  { title: "2. Introduction", fields: [{ name: "eyebrow", label: "Eyebrow" }, { name: "heading", label: "Heading" }, area("description", "Description"), { name: "image", label: "Image", type: "image" }] },
  { title: "3. Eligibility", fields: [{ name: "eyebrow", label: "Eyebrow" }, { name: "heading", label: "Heading" }], dynamic: true, dynamicName: "requirements", dynamicFields: [{ name: "requirement", label: "Registration Requirement" }], addButtonLabel: "Add Requirement", itemLabel: "Requirement" },
  { title: "4. Registration", fields: [{ name: "heading", label: "Section Heading" }, { name: "image", label: "Contact Image", type: "image" }, { name: "formHeading", label: "Form Heading" }, { name: "fullName", label: "Full Name Label" }, { name: "dateOfBirth", label: "Date of Birth Label" }, { name: "contactNumber", label: "Contact Number Label" }, { name: "email", label: "Email Label" }, { name: "natureOfWork", label: "Nature of Work Label" }, { name: "experience", label: "Total Experience Label" }, { name: "message", label: "Message Label" }, { name: "submitLabel", label: "Submit Button Label" }] },
];

export default function AdminKushalConnectionConfig() {
  return <AdminPageEditor title="Manage Kushal Connection Page" description="Manage only the header, introduction, eligibility, and registration content currently present on the Frontend page." sections={sections} />;
}
