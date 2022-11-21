import toPlainText from "../../lib/toPlainText";

export default {
  title: "Project Text",
  name: "projectText",
  type: "object",
  fields: [
    {
      title: "Text",
      name: "text",
      type: "editorial",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      text: "text",
    },
    prepare({ text }) {
      return {
        title: text ? toPlainText(text) : "No title defined",
      };
    },
  },
};
