import { AddUserMutationArgs, AddMessageMutationArgs } from "@demo/_gql/models";
import { isDependee, resolveDependee, pipeResolvers } from 'graphql-resolvers'
import schemas from "@graphql-global/schemas";

export default {
  Mutation: {
    addUser: async (root: any, args: AddUserMutationArgs, ctx: any, info: any) => {
      await ctx.db.collection('users').insert({ id: args.id, name: args.name });
      return `user ${args.name} added`;
    },
    addMessage: async (root: any, args: AddMessageMutationArgs, ctx: any, info: any) => {
      await ctx.db.collection('messages').insert({ idUser: args.idUser, content: args.content });
      const version = await info.mergeInfo.delegateToSchema({
        schema: schemas,
        operation: 'query',
        fieldName: `
        
        
        
        `,
        args: {
          id: args.idUser,
        },
        ctx,
        info
      });
      return `message ${args.content} added in version: ${version}`;
    }
  }
};
