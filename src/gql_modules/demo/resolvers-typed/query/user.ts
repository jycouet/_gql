import { Db } from "mongodb";
import { UserQueryArgs } from "@demo/_gql/models";

export async function getUser(args: UserQueryArgs, db: Db) {
    let users = await db.collection('users').find({ id: args.id }).toArray();
    if (users && users.length > 0) {
        return users[0];
    }
}