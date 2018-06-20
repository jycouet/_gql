import { UserQueryArgs } from "@demo/_gql/models";
import { getUsers } from "@demo/resolvers-typed/query/users";
import { Db } from "mongodb";
import { getUser } from "@demo/resolvers-typed/query/user";
import { getVersion } from "@demo/resolvers-typed/query/version";

export default {
  Query: {
    users: async (root: never, args: never, ctx: any, info: never) => getUsers(ctx.db),
    user: async (root: never, args: UserQueryArgs, ctx: any, info: never) => getUser(args, ctx.db),
    version: () => getVersion()
  }
};
