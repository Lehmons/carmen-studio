import documentTypes from "./documentTypes";

export default {
  title: "Linked Page",
  type: "object",
  name: "linkedPage",
  fields: [
    {
      title: "Link title",
      name: "linkTitle",
      type: "string",
      placeholder: "Depop",
    },
    {
      name: "linkedPage",
      title: "Linked Page",
      type: "reference",
      to: documentTypes,
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "linkedPage.title",
    },
    prepare({ title }) {
      return {
        title: title ? title : "No title defined",
      };
    },
  },
};
