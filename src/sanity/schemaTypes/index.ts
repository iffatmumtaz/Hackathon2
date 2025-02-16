
import { type SchemaTypeDefinition } from "sanity";
import { productSchema } from "./products";
import { categorySchema } from "./categories";
import contactForm from "./contactForm"; 

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, categorySchema, contactForm],
};
