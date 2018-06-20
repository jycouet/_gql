import { AddMessageMutationArgs, AddUserMutationArgs } from '@demo/_gql/models';
import { addMessage } from '@demo/resolvers-typed/mutation/addMessage';
import { addUser } from '@demo/resolvers-typed/mutation/addUser';
import { IgqlContext } from 'src/gqlContext';

export default {
  Mutation: {
    addUser: async (root: never, args: AddUserMutationArgs, ctx: IgqlContext, info: never) => addUser(args, ctx.db),
    addMessage: async (root: never, args: AddMessageMutationArgs, ctx: IgqlContext, info: never) => addMessage(args, ctx.db),
  },
};
