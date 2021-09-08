import { integer, relationship, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

interface Session {
  itemId: string;
  listKey: string;
  data: {
    name: string;
  };
}

interface AccessArguments {
  itemId?: string;
  session?: Session;
}

const isSignedIn = ({ session }: AccessArguments) => !!session;

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
