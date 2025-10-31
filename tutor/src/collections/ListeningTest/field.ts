import { CustomSelectComponent } from "@/collections/ListeningTest/CustomSelectComponent";
import { Field } from "payload";


export const CustomSelectField: Field = {
  name: 'customSelectField',
  type: 'text',
  admin: {
    components: {
      Field: CustomSelectComponent,
    },
  }
}