export default {
  type: "document",
  name: "about",
  title: "About",
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
      title: "Two Column Block",
      name: "twoColumnBlock",
      type: "array",
      of: [{ type: "title" }, { type: "textBlock" }],
    },
    {
      title: "Get In Touch",
      name: "getInTouch",
      type: "editorial",
      validation: (Rule) => Rule.required(),
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
