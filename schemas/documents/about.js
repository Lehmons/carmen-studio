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
      title: "Hero Text",
      name: "heroText",
      type: "editorial",
    },
    {
      title: "Two Column Text Block",
      name: "twoColumnTextBlock",
      type: "twoColumnTextBlock",
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
  },
};
