export default {
  type: "object",
  name: "imageGrid",
  title: "Image Grid",
  fields: [
    {
      title: "Images",
      name: "images",
      type: "array",
      of: [{ type: "imageBlock" }],
      validation: (Rule) => Rule.required().min(2),
    },
  ],
  preview: {
    select: {
      title: "images[0].image.alt",
      media: "images[0].image",
    },
    prepare: ({ title, media }) => {
      return {
        title,
        media,
        subtitle: "grid",
      };
    },
  },
};
