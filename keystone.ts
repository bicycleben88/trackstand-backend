import { config, createSchema } from "@keystone-next/keystone/schema";
import { createAuth } from "@keystone-next/auth";
import { User } from "./lists/User";

let sessionSecret = process.env.SESSION_SECRET;
let db = process.env.DATABASE_URL;

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 100, // stay logged in for 100 days
  secret: process.env.COOKIE_SECRET,
};

export default config({
  // server: {
  //   cors: {
  //     origin: [process.env.FRONTEND_URL],
  //     credentials: true,
  //   },
  // },
  db: {
    adapter: "prisma_postgresql",
    url:
      db || "postgres://benridesbikes:benridesbikes@localhost:5432/trackstand",
  },
  lists: createSchema({
    User,
  }),
  ui: {
    // allow access to every one for now; change this when making roles
    isAccessAllowed: () => true,
  },
  // session is totally coming soon
});
