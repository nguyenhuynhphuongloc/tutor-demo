'use client'
import { Field } from "payload";

export const myarray : Field = {
  
  name: 'myarray',
  type: 'array',  
  label: 'My Array',
  fields: [

    {
      name: 'color',
      type: 'select',
      label: 'Color',

      options: [



        { label: 'Red', value: 'red' }, 


        { label: 'Green', value: 'green' },


        { label: 'Blue', value: 'blue' },
      ],
      defaultValue: 'red',

    },                    
  ]
}