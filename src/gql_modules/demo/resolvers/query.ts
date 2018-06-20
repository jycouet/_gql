import { UserQueryArgs } from '@demo/_gql/models';
import { user } from '@demo/resolvers-typed/query/user';
import { users } from '@demo/resolvers-typed/query/users';
import { version } from '@demo/resolvers-typed/query/version';
import { IgqlContext } from 'src/gqlContext';

export default {
  Query: {
    users: async (root: never, args: never, ctx: IgqlContext, info: never) => users(ctx.db),
    user: async (root: never, args: UserQueryArgs, ctx: IgqlContext, info: never) => user(args, ctx.db),
    version: () => version(),
  },
};
