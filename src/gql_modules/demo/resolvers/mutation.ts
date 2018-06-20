import { AddUserMutationArgs, AddMessageMutationArgs } from "@demo/_gql/models";
import { addUser } from "@demo/resolvers-typed/mutation/addUser";
import { addMessage } from "@demo/resolvers-typed/mutation/addMessage";

export default {
  Mutation: {
    addUser: async (root: never, args: AddUserMutationArgs, ctx: any, info: never) => addUser(args, ctx.db),
    addMessage: async (root: never, args: AddMessageMutationArgs, ctx: any, info: never) => addMessage(args, ctx.db),
  }
};
