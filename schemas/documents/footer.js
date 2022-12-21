export default {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      type: "array",
      name: "socialLinks",
      title: "Social Links",
      of: [
        {
          type: "footerLink",
        },
      ],
    },
    {
      type: "string",
      name: "siteName",
      title: "Site Name",
      placeholder: "Carmen Dowling",
    },
  ],
  preview: {
    prepare({ title }) {
      return {
        title: title ? title : "Footer",
      };
    },
  },
};
