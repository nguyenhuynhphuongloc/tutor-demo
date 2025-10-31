import { CollectionConfig } from "payload";

const ListeningTests: CollectionConfig = {
  slug: "listening-tests",
  labels: {
    singular: "Listening Test",
    plural: "Listening Tests",
  },
  admin: { useAsTitle: "title" },
  access: { read: () => true },

  hooks: {

    beforeChange: [

      async ({ data, req }) => {
      
        if (req.user) {
          data.user = req.user.id;
        }

        return data;
      },

    ],

    afterChange: [

      async ({ doc, operation }) => {

        if (operation === "create") {

          console.log(`Listening test ${doc.title} created successfully`);

        }

      },

    ],

  },

  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "audio",
      type: "upload",
      label: "Audio File",
      relationTo: "media",
      required: true,
    },
      {
          name: "user",
          type: "relationship",
          relationTo: "users",
          label: "Assigned User",
        },
    {
      name: "questions",
      type: "array",
      label: "Questions",
      fields: [
        {
          name: "questionText",
          type: "textarea",
          label: "Question Text",
          required: true,
        },
        {
          name: "questionType",
          type: "select",
          label: "Question Type",
          required: true,
          options: [
            { label: "Multiple Choice", value: "multiple-choice" },
            { label: "True / False", value: "true-false" },
            { label: "Fill in the Blank", value: "fill-in-blank" },
          ],
          defaultValue: "multiple-choice",
        },

    
        {
          name: "options",
          type: "array",
          label: "Options",
          minRows: 2,
          maxRows: 4,
          admin: {
            condition: (_, siblingData) =>
              siblingData?.questionType === "multiple-choice",
          },
          fields: [
            {
              name: "optionText",
              type: "text",
              required: true,
            },
          ],
        },

     
        {
          name: "isTrueCorrect",
          type: "checkbox",
          label: "True is the correct answer?",
          admin: {
            condition: (_, siblingData) =>
              siblingData?.questionType === "true-false",
          },
        },
        {
          name: "correctAnswerText",
          type: "text",
          label: "Correct Answer Text",
          admin: {
            condition: (_, siblingData) =>
              siblingData?.questionType === "fill-in-blank",
          },
        },
      ],
    },
  ],
};

export default ListeningTests;
