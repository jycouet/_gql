export default {
  User: {
    // id: async (root: any, args: any, ctx: any, info: any) => {
    //   return root.id
    // },
    // name: async (root: any, args: any, ctx: any, info: any) => {
    //   return root.name
    // },
    messages: async (root: any, args: any, ctx: any, info: any) => {
      let objToRet: any[] = [];
      const messages = await ctx.db.collection('messages').find({idUser: root.id}).toArray();
      messages.forEach((m: any) => {
        objToRet.push({ author: { id: root.id, name: root.name }, content: m.content })
      });
      return objToRet
    }
  }
};
