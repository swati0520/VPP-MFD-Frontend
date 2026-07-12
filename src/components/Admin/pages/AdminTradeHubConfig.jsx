import AdminPageEditor from "./AdminPageEditor";

const sections = [{
  title: "1. Feature Cards",
  dynamic: true,
  dynamicName: "features",
  dynamicFields: [
    { name: "icon", label: "Icon" },
    { name: "title", label: "Title" },
    { name: "description", label: "Description", type: "textarea", fullWidth: true },
  ],
  addButtonLabel: "Add Feature Card",
  itemLabel: "Feature Card",
}];

export default function AdminTradeHubConfig() {
  return <AdminPageEditor title="Manage Trade Hub Page" description="Manage the same feature cards displayed on the Frontend Trade Hub page." sections={sections} />;
}
