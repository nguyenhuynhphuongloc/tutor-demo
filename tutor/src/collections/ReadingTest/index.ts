import { CollectionConfig } from "payload";

const ReadingTests: CollectionConfig = {
  slug: "reading-tests",
  labels: {
    singular: "Reading Test",
    plural: "Reading Tests",
  },
  
  admin: { useAsTitle: "title" },


  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Reading Test Title",
    },

    {
      name: "passage",
      type: "textarea",
      label: "Reading Passage",
      required: true,
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
            { label: "True / False / Not Given", value: "true-false-not-given" },
            { label: "Fill in the Blank", value: "fill-in-blank" },
            { label: "Matching Headings", value: "matching-headings" },
          ],
          defaultValue: "multiple-choice",
        },

 
        {
          name: "options",
          type: "array",
          label: "Options",
          minRows: 2,
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
          name: "trueFalseNotGiven",
          type: "select",
          label: "Answer (for True/False/Not Given)",
          options: [
            { label: "True", value: "true" },
            { label: "False", value: "false" },
            { label: "Not Given", value: "not-given" },
          ],
          admin: {
            condition: (_, siblingData) =>
              siblingData?.questionType === "true-false-not-given",
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

     
        {
          name: "headingOptions",
          type: "array",
          label: "Heading Options",
          admin: {
            condition: (_, siblingData) =>
              siblingData?.questionType === "matching-headings",
          },
          fields: [
            {
              name: "headingText",
              type: "text",
              required: true,
              label: "Heading",
            },
          ],
        },
        {
          name: "correctHeading",
          type: "text",
          label: "Correct Heading",
          admin: {
            condition: (_, siblingData) =>
              siblingData?.questionType === "matching-headings",
          },
        },
      ],
    },
  ],
};

export default ReadingTests;
