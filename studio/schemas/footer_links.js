export default {
  type: "object",
  name: "footer_links",
  fields: [
    {
      type: "string",
      name: "text",
      title: "Link text",
      validation: null,
    },
    {
      type: "string",
      name: "url",
      title: "URL",
      validation: null,
    },
    {
      type: "boolean",
      name: "new_window",
      title: "Open in new window",
      initialValue: true,
      validation: null,
    },
  ],
  preview: {
    select: {
      title: "text",
    },
  },
};
