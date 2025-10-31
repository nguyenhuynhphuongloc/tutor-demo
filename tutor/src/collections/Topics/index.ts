import type { CollectionConfig } from 'payload';

export const Topics: CollectionConfig = {
  slug: 'topics',
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'description'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media', 
      required: false,
      admin: {
        description: 'Ảnh minh họa cho topic',
      },
    },
    {
      name: 'vocabulary',
      type: 'array',
      label: 'Danh sách từ vựng',
      minRows: 1,
      fields: [
        { name: 'newWord', type: 'text', required: true },
        { name: 'meaningEn', type: 'text', required: true },
        { name: 'meaningVi', type: 'text', required: true },
        { name: 'level', type: 'text', required: true },
        { name: 'antonyms', type: 'text', required: false },
        { name: 'synonyms', type: 'text', required: false },
        { name: 'example', type: 'text', required: true },
      ],
    },
  ],
  timestamps: true,
};
