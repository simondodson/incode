export default {
  "type": "object",
  "name": "social_of",
  "fields": [
      {
          "type": "string",
          "name": "type",
          "title": "Type",
          "hidden": true,
          "validation": null
      },
      {
          "type": "string",
          "name": "title",
          "title": "Title",
          "validation": Rule => Rule.required()
      },
      {
          "type": "string",
          "name": "url",
          "title": "URL",
          "validation": Rule => Rule.required()
      }
  ],
  "preview": {
      "select": {
          "title": "title"
      }
  }
}
