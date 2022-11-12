export default {
  type: "object",
  name: "imageGrid",
  title: "Image Grid",
  fields: [
    {
      title: "Image",
      name: "image",
      type: "image",
      of: [{ type: "imageBlock" }, { type: "imageBlock" }],
      validation: (Rule) => Rule.required().min(2),
    },
  ],
  preview: {
    select: {
      title: "image.alt",
      media: "image",
    },
  },
};
