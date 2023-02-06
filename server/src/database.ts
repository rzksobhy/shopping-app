import { MongoClient } from "mongodb"

const url = process.env.DATABASE!
const client = new MongoClient(url)

export async function connect() {
    await client.connect()

    return "Connected successfully to database"
}

export const db = client.db("shopping-app")

export const users = db.collection("users")
