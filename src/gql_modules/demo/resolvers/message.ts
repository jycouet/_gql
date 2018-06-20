import { formatedContent } from "@demo/resolvers-typed/message/formatedContent";

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
    formatedContent: async (root: any, args: never, ctx: never, info: never) => formatedContent(root)
  }
};
