import { config, createSchema } from "@keystone-next/keystone/schema";
import { createAuth } from "@keystone-next/auth";
import { User } from "./lists/User";
import { statelessSessions } from "@keystone-next/keystone/session";

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
    // server: {
    //   cors: {
    //     origin: [process.env.FRONTEND_URL],
    //     credentials: true,
    //   },
    // },
    db: {
      adapter: "prisma_postgresql",
      url:
        db ||
        "postgres://benridesbikes:benridesbikes@localhost:5432/trackstand",
    },
    lists: createSchema({
      User,
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
