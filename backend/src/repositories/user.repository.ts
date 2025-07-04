import { db } from "../index.js";
import { usersTable } from "../config/db/schema/user.js";
import { eq } from "drizzle-orm";

export class UserRepository {
    async create(users: { name: string; email: string, commission_percentage: number}) {
        return await db.insert(usersTable).values(users);
    }

    async findByEmail(email: string) {
        return await db.select().from(usersTable).where(eq(usersTable.email, email));
    }

    async listAll() {
        return await db.select().from(usersTable)
    }
};