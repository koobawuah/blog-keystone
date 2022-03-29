import { config } from "@keystone-6/core";
import { withAuth, session } from "./authentiation/auth";
import { User, Post } from "./schema";

export default withAuth(
  config({
    db: {
      provider: "sqlite",
      url: "file:./keystone.db",
    },
    lists: {
      User,
      Post,
    },
    session,
    ui: {
      isAccessAllowed: (context) => !!context.session?.data,
    },
  })
);
