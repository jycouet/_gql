import { messages } from "@demo/resolvers-typed/user/messages";
import { User } from "@demo/_gql/models";

export default {
  User: {
    // no need!
    // id: async (root: any, args: any, ctx: any, info: any) => {
    //   return root.id
    // },
    // no need!
    // name: async (root: any, args: any, ctx: any, info: any) => {
    //   return root.name
    // },
    messages: async (root: User, args: never, ctx: any, info: never) => messages(root, ctx.db),
  }
};
