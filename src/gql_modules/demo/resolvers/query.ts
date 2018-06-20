import { UserQueryArgs } from '@demo/_gql/models';
import { user } from '@demo/resolvers-typed/query/user';
import { users } from '@demo/resolvers-typed/query/users';
import { version } from '@demo/resolvers-typed/query/version';

export default {
  Query: {
    users: async (root: never, args: never, ctx: any, info: never) => users(ctx.db),
    user: async (root: never, args: UserQueryArgs, ctx: any, info: never) => user(args, ctx.db),
    version: () => version(),
  },
};
