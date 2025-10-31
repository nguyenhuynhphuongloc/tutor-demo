import type { CollectionConfig, Field } from 'payload'
import { authenticated } from '../../access/authenticated'


export const Users: CollectionConfig = {

  slug: 'users',
  
  access: {
    admin: () => true,
    create: () => true,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },

  admin: {
    defaultColumns: ['name', 'email', 'role', 'createdAt'],
    useAsTitle: 'name',
  },

  auth: true,

  fields: [
    
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Tên người dùng',
     },
    
     
    {
      name: 'role',
      type: 'text',
      label: 'Vai trò',
      defaultValue: 'customer',
      required: true,
    },

    {
      name: 'phone',
      type: 'text',
      label: 'Số điện thoại',
    },

    {
      name: 'address',
      type: 'text',
      label: 'Địa chỉ',
    },


    {
      name: 'isActive',
      type: 'checkbox',
      label: 'Kích hoạt tài khoản',
      defaultValue: true,
    },
  ],

  timestamps: true,
}
