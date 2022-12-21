import toPlainText from "../../lib/toPlainText";

export default {
  title: "Single Image",
  name: "singleImage",
  type: "object",
  fields: [
    {
      title: "Image",
      name: "image",
      type: "imageBlock",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Margin",
      name: "margin",
      type: "boolean",
    },
    {
      title: "Caption",
      name: "caption",
      type: "simple",
    },
    {
      title: "Size",
      name: "size",
      type: "string",
      initialValue: "medium",
      options: {
        list: [
          { title: "Large", value: "large" },
          { title: "Medium", value: "medium" },
          { title: "Small", value: "small" },
        ], // <-- predefined values
        layout: "dropdown", // <-- defaults to 'dropdown'
      },
    },
  ],
  preview: {
    select: {
      size: "size",
      caption: "caption",
      media: "image.image",
    },
    prepare: ({ size, caption, media }) => {
      const prettyTitle = caption ? toPlainText(caption) : " ";
      return {
        title: prettyTitle,
        subtitle: size,
        media,
      };
    },
  },
};
