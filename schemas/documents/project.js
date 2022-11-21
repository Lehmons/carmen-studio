import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";
export default {
  type: "document",
  name: "project",
  title: "Project",
  // Optional: The plugin also exports a set of 'orderings' for use in other Document Lists
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "project", hidden: true }),
    {
      title: "Live",
      name: "live",
      type: "boolean",
    },
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
      title: "Featured Image",
      name: "featuredImage",
      type: "imageBlock",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Blocks",
      name: "blocks",
      type: "array",
      of: [
        { type: "singleImage" },
        { type: "imageGrid" },
        { type: "projectText" },
        // { type: "video" },
      ],
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
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
