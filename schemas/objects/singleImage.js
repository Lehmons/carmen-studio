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
};
