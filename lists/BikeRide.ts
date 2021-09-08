import { integer, relationship, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

const isSignedIn = ({ session }) => !!session;

export const BikeRide = list({
  access: {
    create: isSignedIn,
    read: isSignedIn,
    update: isSignedIn,
    delete: isSignedIn,
  },
  fields: {
    date: text({ isRequired: true }),
    miles: integer({ isRequired: true }),
    hours: integer(),
    minutes: integer(),
    user: relationship({
      ref: "User.bikeRide",
      defaultValue: ({ context }) => ({
        connect: { id: context.session.itemId },
      }),
    }),
  },
});
