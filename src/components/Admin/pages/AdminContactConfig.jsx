import AdminPageEditor from "./AdminPageEditor";

const sections = [
  { title: "1. Page Header", fields: [{ name: "pageTitle", label: "Page Title" }, { name: "heroBanner", label: "Hero Banner", type: "image" }] },
  { title: "2. Contact Introduction", fields: [{ name: "title", label: "Title" }, { name: "subtitle", label: "Subtitle" }, { name: "description", label: "Description", type: "textarea", fullWidth: true }] },
  { title: "3. Contact Details", dynamic: true, dynamicName: "details", dynamicFields: [{ name: "icon", label: "Icon" }, { name: "label", label: "Label" }, { name: "link", label: "Link" }], addButtonLabel: "Add Contact Detail", itemLabel: "Contact Detail" },
  { title: "4. Contact Form", fields: [{ name: "title", label: "Form Title" }, { name: "namePlaceholder", label: "Full Name Placeholder" }, { name: "emailPlaceholder", label: "Email Placeholder" }, { name: "mobilePlaceholder", label: "Mobile Placeholder" }, { name: "messagePlaceholder", label: "Message Placeholder" }, { name: "submitLabel", label: "Submit Button Label" }, { name: "successMessage", label: "Success Message", fullWidth: true }] },
];

export default function AdminContactConfig() {
  return <AdminPageEditor title="Manage Contact Page" description="Manage the contact introduction, details, and the exact form fields used by the Frontend Contact page." sections={sections} />;
}
