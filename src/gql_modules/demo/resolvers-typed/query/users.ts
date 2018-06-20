import { Db } from "mongodb";
import { User } from "@demo/_gql/models";

export async function users(db: Db): Promise<User[]>{
    return await db.collection('users').find().toArray();
}