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
      title: "Featured Project",
      name: "featuredProject",
      type: "imageBlock",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Featured Project Link",
      name: "FeaturedprojectLink",
      type: "reference",
      to: [{ type: "project" }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Featured Project 2",
      name: "featuredProject2",
      type: "imageBlock",
    },
    {
      title: "Featured Project Link 2",
      name: "FeaturedprojectLink2",
      type: "reference",
      to: [{ type: "project" }],
    },
    {
      title: "Projects",
      name: "projects",
      type: "array",
      of: [{ type: "linkedPage" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "images[0].imageBlock.image.asset", //get the first image block of the array to use in media preview
    },
    prepare({ title, media }) {
      return {
        title: title ? title : "No title defined",
        media,
      };
    },
  },
};
