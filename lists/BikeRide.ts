import { integer, relationship, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const BikeRide = list({
  // access:
  fields: {
    date: text({ isRequired: true }),
    miles: integer({ isRequired: true }),
    hours: integer(),
    minutes: integer(),
  },
});
