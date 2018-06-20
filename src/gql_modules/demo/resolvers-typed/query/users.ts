import { Db } from "mongodb";

export async function getUsers(db: Db){
    return await db.collection('users').find().toArray();
}