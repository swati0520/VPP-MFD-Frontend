import AdminPageEditor from "./AdminPageEditor";

const area = (name, label) => ({ name, label, type: "textarea", fullWidth: true });
const sections = [
  { title: "1. Hero Section", fields: [{ name: "tagline", label: "Tagline" }, { name: "heading", label: "Heading" }, area("description", "Description"), { name: "dashboardImage", label: "Dashboard Image", type: "image" }] },
  { title: "2. What We Offer", fields: [{ name: "tagline", label: "Tagline" }, { name: "heading", label: "Heading" }, { name: "sectionImage", label: "Section Image", type: "image" }], dynamic: true, dynamicName: "offerings", dynamicFields: [{ name: "offering", label: "Offering" }], addButtonLabel: "Add Offering", itemLabel: "Offering" },
  { title: "3. Why Choose Us", fields: [{ name: "heading", label: "Heading" }], dynamic: true, dynamicName: "reasons", dynamicFields: [area("reason", "Reason")], addButtonLabel: "Add Reason", itemLabel: "Reason" },
  { title: "4. Registration", fields: [{ name: "heading", label: "Heading" }, { name: "mapImage", label: "Image / Map", type: "image" }, { name: "fullName", label: "Full Name Label" }, { name: "dateOfBirth", label: "Date of Birth Label" }, { name: "contactNumber", label: "Contact Number Label" }, { name: "companyName", label: "Company / Firm Name Label" }, { name: "submitLabel", label: "Submit Button Label" }] },
  { title: "5. Footer", fields: [{ name: "brand", label: "Brand" }, area("description", "Description"), { name: "address", label: "Address" }, { name: "phone", label: "Phone" }, { name: "email", label: "Email" }], dynamic: true, dynamicName: "quickLinks", dynamicFields: [{ name: "label", label: "Quick Link Label" }], addButtonLabel: "Add Quick Link", itemLabel: "Quick Link" },
];

export default function AdminDishaConfig() {
  return <AdminPageEditor title="Manage Disha Page" description="Edit the same hero, offerings, reasons, registration fields, and footer content displayed on the Frontend Disha page." sections={sections} />;
}
