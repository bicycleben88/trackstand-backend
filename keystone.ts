import { config, createSchema } from "@keystone-next/keystone/schema";
import { statelessSessions } from "@keystone-next/keystone/session";
import { createAuth } from "@keystone-next/auth";
import { User } from "./lists/User";
import { BikeRide } from "./lists/BikeRide";
import { addSeedData } from "./seed-data";

let sessionSecret = process.env.SESSION_SECRET;
let db = process.env.DATABASE_URL;

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"],
  },
});

export default withAuth(
  config({
    server: {
      cors: {
        origin: "http://localhost:8081/",
        credentials: false,
      },
    },
    db: {
      adapter: "prisma_postgresql",
      url:
        db ||
        "postgres://benridesbikes:benridesbikes@localhost:5432/trackstand",
      onConnect: async (keystone) => {
        if (process.argv.includes("--seed-data")) {
          await addSeedData(keystone);
        }
      },
    },
    lists: createSchema({
      User,
      BikeRide,
    }),
    ui: {
      // allow access to logged in user
      isAccessAllowed: ({ session }) => {
        return session;
      },
    },
    session: statelessSessions({
      maxAge: 60 * 60 * 24 * 100, // stay logged in for 100 days
      secret:
        sessionSecret || "something_else12345678900987987676854213asdfjgkjhg",
    }),
  })
);
