export default {
  type: "document",
  name: "home",
  title: "Home",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Blocks",
      name: "blocks",
      type: "array",
      of: [{ type: "featuredImage1" }, { type: "featuredImage2" }],
    },
  ],
};
