import AdminPageEditor from "./AdminPageEditor";

const sections = [{
  title: "1. Gallery Items",
  dynamic: true,
  dynamicName: "galleryItems",
  dynamicFields: [
    { name: "title", label: "Title" },
    { name: "image", label: "Image", type: "image" },
  ],
  addButtonLabel: "Add Gallery Item",
  itemLabel: "Gallery Item",
}];

export default function AdminGalleryConfig() {
  return <AdminPageEditor title="Manage Gallery Page" description="Manage the title and image for every card shown in the Frontend gallery." sections={sections} />;
}
