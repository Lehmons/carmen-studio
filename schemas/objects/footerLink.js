export default {
  type: "object",
  name: "footerLink",
  title: "Footer Link",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Link",
      name: "link",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
    },
  ],
};
