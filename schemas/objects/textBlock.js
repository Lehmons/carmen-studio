export default {
  title: "Text Block",
  name: "textBlock",
  type: "object",
  fields: [
    {
      name: "margin",
      title: "Margin",
      type: "boolean",
    },
    {
      title: "Paragraph",
      name: "paragraph",
      type: "editorial",
    },
  ],
  preview: {
    select: {
      title: "paragraph",
    },
  },
};
