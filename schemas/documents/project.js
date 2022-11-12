export default {
  type: "document",
  name: "project",
  title: "Project",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          `/${input.toLowerCase().replace(/\s+/g, "-").slice(0, 200)}`,
      },
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [
        { type: "doubleImageTextBlock" },
        { type: "doubleImageBlock" },
        { type: "imageBlock" },
      ],
    },
    {
      title: "Blurb",
      name: "blurb",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
      blocks: "blocks.length",
    },
    prepare({ title, blocks }) {
      return {
        title: title ? title : "No title defined",
        subtitle: blocks ? `${blocks} blocks` : "No blocks defined",
      };
    },
  },
};
