import AdminPageEditor from "./AdminPageEditor";

const sections = [{
  title: "1. Blog Cards",
  dynamic: true,
  dynamicName: "posts",
  dynamicFields: [
    { name: "category", label: "Category" },
    { name: "title", label: "Title" },
    { name: "description", label: "Description", type: "textarea", fullWidth: true },
  ],
  addButtonLabel: "Add Blog Card",
  itemLabel: "Blog Card",
}];

export default function AdminBlogsConfig() {
  return <AdminPageEditor title="Manage Blogs Page" description="Manage the blog cards displayed on the Frontend Blogs page." sections={sections} />;
}
