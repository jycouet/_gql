import { formatedContent } from "@demo/resolvers-typed/message/formatedContent";
import { Message } from "@demo/_gql/models";

export default {
  Message: {
    // no need!
    // content: async (root: any, args: any, ctx: any, info: any) => {
    //   return root.content
    // },
    // no need!
    // author: async (root: any, args: any, ctx: any, info: any) => {
    //   return root.author
    // },
    formatedContent: async (root: Message, args: never, ctx: never, info: never) => formatedContent(root)
  }
};
