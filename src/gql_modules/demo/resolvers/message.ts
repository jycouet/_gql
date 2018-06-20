export default {
  Message: {
    content: async (root: any, args: any, ctx: any, info: any) => {
      return root.content
    },
    author: async (root: any, args: any, ctx: any, info: any) => {
      return root.author
    },
    formatedContent: async (root: any, args: any, ctx: any, info: any) => {
      return `${root.author.name} - ${root.content}`;
    }
  }
};
