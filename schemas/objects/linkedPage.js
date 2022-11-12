export default {
  title: "Linked Page",
  type: "object",
  name: "linkedPage",
  fields: [
    {
      // string (link title)
      title: "Link title",
      name: "linkTitle",
      type: "string",
    },
    {
      name: "projectPage",
      title: "Project Page",
      type: "reference",
      to: [{ type: "projectPage" }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "projectPage.title",
    },
    prepare({ title }) {
      return {
        title: title ? title : "No title defined",
      };
    },
  },
};
