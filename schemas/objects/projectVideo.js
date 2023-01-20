export default {
  title: "Video",
  name: "projectVideo",
  type: "object",
  fields: [
    {
      title: "Margin",
      name: "margin",
      type: "boolean",
    },
    {
      title: "Video",
      name: "video",
      type: "mux.video",
    },
    {
      name: "alt",
      type: "string",
      title: "Alt",
      description: "Ensure alt text is filled in for accessibility",
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
  ],
  preview: {
    select: {
      title: "alt",
      media: "mux.video",
    },
  },
};
