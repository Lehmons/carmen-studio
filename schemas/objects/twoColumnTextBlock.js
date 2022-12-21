export default {
  title: "Two Column Text Block",
  name: "twoColumnTextBlock",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "editorial",
    },
    {
      title: "Paragraphs",
      name: "paragraphs",
      type: "array",
      of: [{ type: "columnTextBlock" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
