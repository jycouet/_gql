import { UserQueryArgs } from "@demo/_gql/models";

export default {
  Query: {
    users: async (root: any, args: any, ctx: any, info: any) => {
      return await ctx.db.collection('users').find().toArray();
    },
    user: async (root: any, args: UserQueryArgs, ctx: any, info: any) => {
      let users = await ctx.db.collection('users').find({ id: args.id }).toArray();
      if (users && users.length > 0) {
        return users[0];
      }
    },
    version: () => 'v00000001'
  }
};
