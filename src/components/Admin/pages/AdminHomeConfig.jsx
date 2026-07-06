import SectionForm from "./SectionForm";
const statusOptions = [
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
];

const required = { required: "This field is required" };

const urlPattern = {
  value: /^https?:\/\/([\w-]+\.)+[\w-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/i,
  message: "Enter a valid URL.",
};

const imageValidation = {
  validate: {
    required: (files) => files?.length > 0 || "Image is required.",
    fileType: (files) => {
      if (!files?.length) return true;
      return (
        ["image/jpeg", "image/png", "image/webp"].includes(files[0].type) ||
        "Only JPG, JPEG, PNG, or WEBP images are allowed."
      );
    },
    fileSize: (files) => {
      if (!files?.length) return true;
      return files[0].size <= 2 * 1024 * 1024 || "Image size must be 2 MB or less.";
    },
  },
};

const positiveIntegerValidation = {
  required: "Display order is required.",
  validate: (value) => {
    const number = Number(value);
    return (Number.isInteger(number) && number >= 1) || "Enter a positive integer from 1.";
  },
};

const heroFields = [
  {
    name: "tagline",
    label: "Tagline",
    placeholder: "Empowering financial decisions",
    validation: {
      required: "Section tagline is required.",
      minLength: { value: 3, message: "Section tagline must be at least 3 characters." },
      maxLength: { value: 100, message: "Section tagline must be 100 characters or less." },
    },
  },
  {
    name: "heading",
    label: "Main Heading",
    placeholder: "Your trusted MFD partner",
    validation: {
      required: "Section heading is required.",
      minLength: { value: 5, message: "Section heading must be at least 5 characters." },
      maxLength: { value: 200, message: "Section heading must be 200 characters or less." },
    },
  },
  { name: "subHeading", label: "Sub Heading", placeholder: "Mutual funds, insurance, and wealth guidance" },
  {
    name: "description",
    label: "Description",
    type: "textarea",
    placeholder: "Write a short hero description for the homepage.",
    fullWidth: true,
  },
  { name: "primaryButtonText", label: "Primary Button Text", placeholder: "Get Started" },
  { name: "primaryButtonLink", label: "Primary Button Link", placeholder: "/contact" },
  { name: "secondaryButtonText", label: "Secondary Button Text", placeholder: "Explore Services" },
  { name: "secondaryButtonLink", label: "Secondary Button Link", placeholder: "/services" },
  { name: "backgroundImage", label: "Background Image", type: "image" },
  { name: "heroImage", label: "Hero Image", type: "image" },
  { name: "status", label: "Status", type: "select", options: statusOptions, defaultValue: "active" },
];

const statisticsFields = [
  { name: "counterNumber", label: "Counter Number", type: "number", placeholder: "1000", min: 0, validation: required },
  { name: "counterLabel", label: "Counter Label", placeholder: "Happy Clients", validation: required },
  { name: "icon", label: "Icon", placeholder: "users" },
  { name: "displayOrder", label: "Display Order", type: "number", placeholder: "1", min: 0 },
  { name: "status", label: "Status", type: "select", options: statusOptions, defaultValue: "active" },
];

const aboutPreviewFields = [
  { name: "sectionTag", label: "Section Tag", placeholder: "About VPP MFD" },
  { name: "heading", label: "Heading", placeholder: "Helping investors grow with confidence", validation: required },
  {
    name: "shortDescription",
    label: "Short Description",
    type: "textarea",
    placeholder: "Add a concise company introduction for the home page.",
    fullWidth: true,
  },
  { name: "companyImage", label: "Company Image", type: "image" },
  { name: "experienceNumber", label: "Experience Number", type: "number", placeholder: "15", min: 0 },
  { name: "experienceText", label: "Experience Text", placeholder: "Years of experience" },
  { name: "buttonText", label: "Button Text", placeholder: "Know More" },
  { name: "buttonLink", label: "Button Link", placeholder: "/about" },
];

const whyChooseUsFields = [
  { name: "iconImage", label: "Icon/Image", type: "image" },
  { name: "title", label: "Title", placeholder: "Personalized planning", validation: required },
  {
    name: "description",
    label: "Description",
    type: "textarea",
    placeholder: "Explain the benefit in one or two lines.",
    fullWidth: true,
  },
  { name: "displayOrder", label: "Display Order", type: "number", placeholder: "1", min: 0 },
  { name: "status", label: "Status", type: "select", options: statusOptions, defaultValue: "active" },
];

const servicesPreviewFields = [
  { name: "image", label: "Image", type: "image", validation: imageValidation },
  {
    name: "title",
    label: "Title",
    placeholder: "Mutual Fund Advisory",
    validation: {
      required: "Service title is required.",
      minLength: { value: 3, message: "Service title must be at least 3 characters." },
      maxLength: { value: 100, message: "Service title must be 100 characters or less." },
    },
  },
  {
    name: "shortDescription",
    label: "Short Description",
    type: "textarea",
    placeholder: "Add a short service summary.",
    fullWidth: true,
    validation: {
      required: "Service description is required.",
      minLength: { value: 20, message: "Service description must be at least 20 characters." },
      maxLength: { value: 500, message: "Service description must be 500 characters or less." },
    },
  },
  { name: "buttonText", label: "Button Text", placeholder: "Read More" },
  {
    name: "buttonLink",
    label: "Button Link",
    placeholder: "https://example.com/services/mutual-funds",
    validation: {
      required: "Button link is required.",
      pattern: urlPattern,
    },
  },
  {
    name: "displayOrder",
    label: "Display Order",
    type: "number",
    placeholder: "1",
    min: 1,
    validation: positiveIntegerValidation,
  },
  {
    name: "status",
    label: "Status",
    type: "select",
    options: statusOptions,
    defaultValue: "active",
    validation: { required: "Status is required." },
  },
];

const workingProcessFields = [
  { name: "stepNumber", label: "Step Number", placeholder: "01", validation: required },
  { name: "title", label: "Title", placeholder: "Consultation", validation: required },
  {
    name: "description",
    label: "Description",
    type: "textarea",
    placeholder: "Describe what happens in this step.",
    fullWidth: true,
  },
  { name: "icon", label: "Icon", placeholder: "clipboard-check" },
  { name: "displayOrder", label: "Display Order", type: "number", placeholder: "1", min: 0 },
];

const ctaFields = [
  { name: "heading", label: "Heading", placeholder: "Ready to plan your financial future?", validation: required },
  {
    name: "description",
    label: "Description",
    type: "textarea",
    placeholder: "Add a short CTA message.",
    fullWidth: true,
  },
  { name: "buttonText", label: "Button Text", placeholder: "Book Consultation" },
  { name: "buttonLink", label: "Button Link", placeholder: "/contact" },
  { name: "backgroundImage", label: "Background Image", type: "image" },
];

const testimonialsFields = [
  { name: "clientImage", label: "Client Image", type: "image" },
  { name: "clientName", label: "Client Name", placeholder: "Rahul Sharma", validation: required },
  { name: "designation", label: "Designation", placeholder: "Business Owner" },
  { name: "company", label: "Company", placeholder: "Sharma Associates" },
  {
    name: "review",
    label: "Review",
    type: "textarea",
    placeholder: "Add the testimonial text.",
    fullWidth: true,
  },
  { name: "rating", label: "Rating", type: "number", placeholder: "5", min: 1, max: 5, step: 0.5 },
  { name: "status", label: "Status", type: "select", options: statusOptions, defaultValue: "active" },
];

const clientLogoFields = [
  { name: "companyName", label: "Company Name", placeholder: "Partner company", validation: required },
  { name: "logoImage", label: "Logo Image", type: "image" },
  { name: "websiteUrl", label: "Website URL", placeholder: "https://example.com" },
  { name: "displayOrder", label: "Display Order", type: "number", placeholder: "1", min: 0 },
  { name: "status", label: "Status", type: "select", options: statusOptions, defaultValue: "active" },
];

const AdminHomeConfig = () => (
  <div className="space-y-8 max-w-6xl mx-auto">
    <SectionForm
      title="1. Hero Section"
      description="Manage the first fold content, buttons, media, and visibility."
      fields={heroFields}
    />

    <SectionForm
      title="2. Statistics Section"
      description="Add the counters shown near the homepage trust or achievement area."
      dynamic
      dynamicName="statistics"
      dynamicFields={statisticsFields}
      addButtonLabel="Add New Statistic"
      itemLabel="Statistic"
    />

    <SectionForm
      title="3. About Preview Section"
      description="Maintain the short About block that links users to the full About page."
      fields={aboutPreviewFields}
    />

    <SectionForm
      title="4. Why Choose Us"
      description="Create feature cards that explain why visitors should trust the business."
      dynamic
      dynamicName="whyChooseUs"
      dynamicFields={whyChooseUsFields}
      addButtonLabel="Add New Card"
      itemLabel="Card"
    />

    <SectionForm
      title="5. Services Preview"
      description="Manage the highlighted services shown on the homepage. Full service management belongs in Services."
      dynamic
      dynamicName="services"
      dynamicFields={servicesPreviewFields}
      addButtonLabel="Add New Service"
      itemLabel="Service"
    />

    <SectionForm
      title="6. Working Process"
      description="Maintain the step-by-step process shown to new visitors."
      dynamic
      dynamicName="processSteps"
      dynamicFields={workingProcessFields}
      addButtonLabel="Add New Step"
      itemLabel="Step"
    />

    <SectionForm
      title="7. Call To Action"
      description="Control the homepage CTA band and its destination."
      fields={ctaFields}
    />

    <SectionForm
      title="8. Testimonials"
      description="Feature selected testimonials on the homepage. Full testimonial management belongs in Testimonials."
      dynamic
      dynamicName="testimonials"
      dynamicFields={testimonialsFields}
      addButtonLabel="Add New Testimonial"
      itemLabel="Testimonial"
    />

    <SectionForm
      title="9. Client Logos"
      description="Manage partner or client logos displayed on the homepage."
      dynamic
      dynamicName="clientLogos"
      dynamicFields={clientLogoFields}
      addButtonLabel="Add New Logo"
      itemLabel="Logo"
   />
  </div>
);

export default AdminHomeConfig; 