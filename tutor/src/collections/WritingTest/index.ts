import { CollectionConfig } from "payload";

const WritingTests: CollectionConfig = {
  slug: 'writing-tests',

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'question', 'image'],
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
      name: 'image',
      type: 'upload',
      relationTo: 'media', 
      label: 'Hình ảnh',
    },
  ],

  timestamps: true,
};

export default WritingTests;
