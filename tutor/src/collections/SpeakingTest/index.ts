import { CollectionConfig } from "payload";

const SpeakingTests: CollectionConfig = {
  
  slug: 'speaking-tests',

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'question', 'audio'],
  },

  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Tiêu đề',
    },
    {
      name: 'question',
      type: 'textarea',
      required: true,
      label: 'Câu hỏi',
    },
    {
      name: 'audio',
      type: 'upload',
      relationTo: 'media',
      label: 'Audio',
    },
  ],

  timestamps: true,
};

export default SpeakingTests;
