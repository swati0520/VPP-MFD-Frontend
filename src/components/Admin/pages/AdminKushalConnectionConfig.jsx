import { Image, Layers, Link, Sparkles } from "lucide-react";

import SectionForm from "./SectionForm";

const statusOptions = [
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
];

const pageStatusOptions = [
  { label: "Published", value: "published" },
  { label: "Draft", value: "draft" },
  { label: "Archived", value: "archived" },
];

const required = { required: "This field is required." };

const statusField = {
  name: "status",
  label: "Status",
  type: "select",
  options: statusOptions,
  defaultValue: "active",
};

const displayOrderField = {
  name: "displayOrder",
  label: "Display Order",
  type: "number",
  placeholder: "1",
  min: 1,
};

const descriptionField = {
  name: "description",
  label: "Description",
  type: "textarea",
  placeholder: "Write a clear section description.",
  fullWidth: true,
};

const shortDescriptionField = {
  name: "shortDescription",
  label: "Short Description",
  type: "textarea",
  placeholder: "Write a short summary.",
  fullWidth: true,
};

const imageField = (name, label) => ({
  name,
  label,
  type: "image",
});

const buttonFields = [
  { name: "buttonText", label: "Button Text", placeholder: "Join Now" },
  { name: "buttonLink", label: "Button Link", placeholder: "/contact" },
];

const cardFields = [
  imageField("iconImage", "Icon/Image"),
  { name: "title", label: "Title", placeholder: "Trusted partner", validation: required },
  descriptionField,
  displayOrderField,
  statusField,
];

const simpleIconCardFields = [
  { name: "icon", label: "Icon", placeholder: "users" },
  { name: "title", label: "Title", placeholder: "Expert guidance", validation: required },
  descriptionField,
];

const kushalSections = [
  {
    title: "1. Hero Section",
    description: "Manage the first fold for the Kushal Connection page.",
    fields: [
      { name: "heroTagline", label: "Hero Tagline", placeholder: "Kushal Connection" },
      { name: "heroTitle", label: "Hero Title", placeholder: "Build your business with VPP MFD", validation: required },
      {
        name: "heroSubtitle",
        label: "Hero Subtitle",
        type: "textarea",
        placeholder: "Create a strong page intro for advisors, partners, and investors.",
        fullWidth: true,
      },
      imageField("backgroundImage", "Background Image"),
      imageField("heroImage", "Hero Image"),
      { name: "primaryButtonText", label: "Primary Button Text", placeholder: "Join Now" },
      { name: "primaryButtonLink", label: "Primary Button Link", placeholder: "/contact" },
      { name: "secondaryButtonText", label: "Secondary Button Text", placeholder: "Learn More" },
      { name: "secondaryButtonLink", label: "Secondary Button Link", placeholder: "#about" },
    ],
  },
  {
    title: "2. About Kushal Connection",
    description: "Control the page introduction, media, and read-more action.",
    fields: [
      { name: "sectionTagline", label: "Section Tagline", placeholder: "About Kushal Connection" },
      { name: "heading", label: "Heading", placeholder: "A growth platform for financial professionals", validation: required },
      { name: "subHeading", label: "Sub Heading", placeholder: "Support, systems, and scale under one roof" },
      descriptionField,
      imageField("aboutImage", "About Image"),
      { name: "readMoreButtonText", label: "Read More Button Text", placeholder: "Read More" },
      { name: "readMoreButtonLink", label: "Read More Button Link", placeholder: "/about" },
    ],
  },
  {
    title: "3. Why Kushal Connection",
    description: "Add, edit, reorder, and publish benefit cards.",
    dynamic: true,
    dynamicName: "whyKushalConnection",
    dynamicFields: cardFields,
    addButtonLabel: "Add New Card",
    itemLabel: "Card",
  },
  {
    title: "4. Membership Benefits",
    description: "Manage benefit cards shown to prospective members.",
    dynamic: true,
    dynamicName: "membershipBenefits",
    dynamicFields: [
      imageField("image", "Image"),
      { name: "title", label: "Title", placeholder: "Business growth support", validation: required },
      shortDescriptionField,
      displayOrderField,
      statusField,
    ],
    addButtonLabel: "Add New Benefit",
    itemLabel: "Benefit",
  },
  {
    title: "5. Features",
    description: "Maintain feature highlights for the Kushal Connection experience.",
    dynamic: true,
    dynamicName: "features",
    dynamicFields: simpleIconCardFields,
    addButtonLabel: "Add New Feature",
    itemLabel: "Feature",
  },
  {
    title: "6. Investment / Business Opportunities",
    description: "Manage opportunity cards and their destination actions.",
    dynamic: true,
    dynamicName: "opportunities",
    dynamicFields: [
      imageField("image", "Image"),
      { name: "title", label: "Title", placeholder: "Partner opportunity", validation: required },
      descriptionField,
      ...buttonFields,
    ],
    addButtonLabel: "Add New Opportunity",
    itemLabel: "Opportunity",
  },
  {
    title: "7. Working Process",
    description: "Create the step-by-step joining or onboarding process.",
    dynamic: true,
    dynamicName: "workingProcess",
    dynamicFields: [
      { name: "stepNumber", label: "Step Number", placeholder: "01", validation: required },
      { name: "icon", label: "Icon", placeholder: "clipboard-check" },
      { name: "title", label: "Title", placeholder: "Submit inquiry", validation: required },
      descriptionField,
    ],
    addButtonLabel: "Add New Step",
    itemLabel: "Step",
  },
  {
    title: "8. Who Can Join",
    description: "Manage audience cards for eligible members or partners.",
    dynamic: true,
    dynamicName: "whoCanJoin",
    dynamicFields: simpleIconCardFields,
    addButtonLabel: "Add New Audience",
    itemLabel: "Audience",
  },
  {
    title: "9. Success Stories",
    description: "Maintain reviews, ratings, and customer profile content.",
    dynamic: true,
    dynamicName: "successStories",
    dynamicFields: [
      imageField("clientImage", "Client Image"),
      { name: "name", label: "Name", placeholder: "Rahul Sharma", validation: required },
      { name: "designation", label: "Designation", placeholder: "Business Partner" },
      {
        name: "review",
        label: "Review",
        type: "textarea",
        placeholder: "Write the client review.",
        fullWidth: true,
      },
      { name: "rating", label: "Rating", type: "number", placeholder: "5", min: 1, max: 5, step: 0.5 },
    ],
    addButtonLabel: "Add New Story",
    itemLabel: "Story",
  },
  {
    title: "10. Gallery",
    description: "Upload and organize responsive gallery items by category.",
    dynamic: true,
    dynamicName: "gallery",
    dynamicFields: [
      imageField("image", "Image Upload"),
      { name: "title", label: "Title", placeholder: "Investor meet" },
      { name: "category", label: "Category", placeholder: "Events" },
      descriptionField,
      displayOrderField,
      statusField,
    ],
    addButtonLabel: "Add New Gallery Item",
    itemLabel: "Gallery Item",
  },
  {
    title: "11. FAQ",
    description: "Add common questions and answers for the page.",
    dynamic: true,
    dynamicName: "faqs",
    dynamicFields: [
      { name: "question", label: "Question", placeholder: "Who can join Kushal Connection?", validation: required },
      {
        name: "answer",
        label: "Answer",
        type: "textarea",
        placeholder: "Write the answer.",
        fullWidth: true,
        validation: required,
      },
    ],
    addButtonLabel: "Add New FAQ",
    itemLabel: "FAQ",
  },
  {
    title: "12. Contact / Join Now Form",
    description: "Prepare the inquiry form fields and submit button text for future API wiring.",
    fields: [
      { name: "fullNameLabel", label: "Full Name", placeholder: "Full Name" },
      { name: "mobileNumberLabel", label: "Mobile Number", placeholder: "Mobile Number" },
      { name: "emailLabel", label: "Email", placeholder: "Email" },
      { name: "cityLabel", label: "City", placeholder: "City" },
      { name: "stateLabel", label: "State", placeholder: "State" },
      { name: "messageLabel", label: "Message", placeholder: "Message" },
      { name: "submitButtonText", label: "Submit Button Text", placeholder: "Submit" },
    ],
  },
  {
    title: "13. Final CTA Section",
    description: "Control the final conversion band at the bottom of the page.",
    fields: [
      { name: "heading", label: "Heading", placeholder: "Start your Kushal Connection journey", validation: required },
      descriptionField,
      imageField("backgroundImage", "Background Image"),
      ...buttonFields,
    ],
  },
  {
    title: "14. SEO Section",
    description: "Manage search and social metadata for the Kushal Connection page.",
    fields: [
      { name: "metaTitle", label: "Meta Title", placeholder: "Kushal Connection | VPP MFD" },
      {
        name: "metaDescription",
        label: "Meta Description",
        type: "textarea",
        placeholder: "Write the page meta description.",
        fullWidth: true,
      },
      {
        name: "metaKeywords",
        label: "Meta Keywords",
        type: "textarea",
        placeholder: "kushal connection, vpp mfd, business opportunity",
        fullWidth: true,
      },
      { name: "ogTitle", label: "OG Title", placeholder: "Kushal Connection" },
      {
        name: "ogDescription",
        label: "OG Description",
        type: "textarea",
        placeholder: "Write the social sharing description.",
        fullWidth: true,
      },
      imageField("ogImage", "OG Image"),
    ],
  },
  {
    title: "15. Page Settings",
    description: "Manage page visibility, slug, banner, and breadcrumb imagery.",
    fields: [
      {
        name: "pageStatus",
        label: "Page Status",
        type: "select",
        options: pageStatusOptions,
        defaultValue: "published",
      },
      { name: "slug", label: "Slug", placeholder: "kushal-connection", validation: required },
      imageField("pageBanner", "Page Banner"),
      imageField("breadcrumbImage", "Breadcrumb Image"),
    ],
  },
  {
    title: "16. Statistics / Counters",
    description: "Optional counters for achievements, members, partners, or growth metrics.",
    dynamic: true,
    dynamicName: "statistics",
    dynamicFields: [
      { name: "counterNumber", label: "Counter Number", type: "number", placeholder: "1000", min: 0 },
      { name: "counterLabel", label: "Counter Label", placeholder: "Members joined", validation: required },
      { name: "icon", label: "Icon", placeholder: "trending-up" },
      displayOrderField,
      statusField,
    ],
    addButtonLabel: "Add New Counter",
    itemLabel: "Counter",
  },
  {
    title: "17. Partner Logos",
    description: "Optional logo strip management if the live page displays partners or associates.",
    dynamic: true,
    dynamicName: "partnerLogos",
    dynamicFields: [
      { name: "partnerName", label: "Partner Name", placeholder: "Partner company", validation: required },
      imageField("logoImage", "Logo Image"),
      { name: "websiteUrl", label: "Website URL", placeholder: "https://example.com" },
      displayOrderField,
      statusField,
    ],
    addButtonLabel: "Add New Logo",
    itemLabel: "Logo",
  },
  {
    title: "18. Additional Information Blocks",
    description: "Flexible blocks for any extra banners, cards, or information sections found on the live page.",
    dynamic: true,
    dynamicName: "informationBlocks",
    dynamicFields: [
      imageField("image", "Image/Icon"),
      { name: "title", label: "Title", placeholder: "Training and support" },
      descriptionField,
      ...buttonFields,
      displayOrderField,
      statusField,
    ],
    addButtonLabel: "Add New Block",
    itemLabel: "Block",
  },
];

const moduleStats = [
  { label: "Sections", value: kushalSections.length, icon: Layers },
  { label: "Dynamic CRUD Areas", value: kushalSections.filter((section) => section.dynamic).length, icon: Sparkles },
  { label: "Media Managers", value: "12+", icon: Image },
  { label: "Route", value: "/admin/kushal-connection", icon: Link },
];

const AdminKushalConnectionConfig = () => (
  <div className="mx-auto max-w-6xl space-y-8">
    <section className="rounded-2xl border border-[#BFDBFE] bg-[#FFFFFF] p-6 shadow-sm dark:border-[#3B2F5C] dark:bg-[#1B1B2B]">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-3">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#DBEAFE] px-4 py-2 text-xs font-bold uppercase text-[#0369A1] dark:bg-[#1E3A8A] dark:text-[#BFDBFE]">
            <Sparkles size={14} />
            Kushal Connection Module
          </span>
          <div>
            <h1 className="text-2xl font-bold text-[#4A044E] dark:text-[#FFFFFF] md:text-3xl">
              Manage Kushal Connection Page
            </h1>
            <p className="mt-2 text-sm leading-6 text-[#6B7280] dark:text-[#D1D5DB]">
              UI-only admin controls for all page content, repeatable cards, media sections, SEO, and page settings.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:min-w-[520px]">
          {moduleStats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-xl border border-[#BFDBFE] bg-[#FFF5F7] p-4 dark:border-[#1E3A8A] dark:bg-[#0B0B0F]"
              >
                <Icon size={18} className="mb-3 text-[#0EA5E9] dark:text-[#60A5FA]" />
                <p className="text-lg font-bold text-[#4A044E] dark:text-[#FFFFFF]">{stat.value}</p>
                <p className="text-xs font-semibold text-[#6B7280] dark:text-[#D1D5DB]">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {kushalSections.map((section) => (
      <SectionForm key={section.title} {...section} />
    ))}
  </div>
);

export default AdminKushalConnectionConfig;
